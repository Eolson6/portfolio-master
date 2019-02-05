import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
// import { Provider } from 'react-redux';
import { Provider } from 'react-redux/src';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects)
    yield takeEvery('GET_TAGS', getTags)
    yield takeEvery('ADD_PROJECT', addProject)
    yield takeEvery('DELETE_PROJECT', deleteProject)

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            console.log('projectsRudcer', action.payload);
            return action.payload;
            
            
        default:
            return state;
    }
}

function* getProjects(action) {
    try {
        const projects = yield axios.get('/projects', action.payload);
        console.log('in getProjects', projects.data);
        const nextAction = { type: 'SET_PROJECTS', payload: projects.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get', error);
        alert(error)

    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
        console.log('tagsReducer', action.payload);
        
            return action.payload;
        default:
            return state;
    }
}

function* getTags(action) {
    try {
        const tags = yield axios.get('/adminPage', action.payload);
        console.log('in gettags', tags.data);
        const nextAction = { type: 'SET_TAGS', payload: tags.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get', error);
        alert(error)

    }
}

function* addProject(action) {
    try {
        yield axios.post('/adminPage', action.payload);
        const action = {type:'SET_PROJECTS'};
        yield put(action);
        
    } catch (error) {
        console.log('error in post', error);
        alert('error submitting new project')
        
    }
    alert('new project sucessfully submitted')
}

//didn't have delete function working when I submited project
//missed the live walk through but worked on it at home 
function* deleteProject(action) {
    console.log('action.payload delete', action.payload);
    const id = action.payload
    console.log('in delete', id);
    
    try{
        //updated next actin type from SET to GET- also updated what
        //was being sent
        yield axios.delete(`/adminPage/${action.payload}`)
        const nextAction={type:'GET_PROJECTS'};
        yield put(nextAction);
    }catch (error) {
        console.log('error in delete', error);
        alert('error in deleting project')
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projectsReducer,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

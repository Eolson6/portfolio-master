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
        const nextAction = {type:'SET_PROJECTS'};
        yield put(nextAction);
    } catch (error) {
        console.log('error in post', error);
        
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

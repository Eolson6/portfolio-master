import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectCards from '../ProjectsCard/ProjectsCard.js'



class Projects extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

    render() {
        return (
    
            <div>
                <ul>
                <ProjectCards getProjects={this.getProjects} />
                </ul>
                    </div>
          
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Projects);
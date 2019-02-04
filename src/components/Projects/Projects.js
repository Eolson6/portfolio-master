import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectCards from '../ProjectsCard/ProjectsCard.js'
import ProjectsHeader from '../ProjectsHeader/ProjectsHeader.js'

class Projects extends Component {

    //runs when application runs
    componentDidMount() {
        this.getProjects();
    }
    //talks to saga with action type- gets info from reducer
    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                {/* imported project header */}
                <ProjectsHeader />
                <ul>
                    {/* imported project cards- passed get projects function through props */}
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
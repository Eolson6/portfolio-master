import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectsList from '../ProjectsList/ProjectsList.js';

class ProjectsCard extends Component {

    // runs when page loads
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

            <ul>
                {/* maps items recieved from projects reducer */}
                {this.props.reduxStore.projectsReducer.map((project, i) => {
                    return (
                        <ProjectsList key={i} project={project} name={project.name} description={project.description}
                            thumbnail={project.thumbnail} github={project.github} website={project.website} date_completed={project.date_completed}
                            tag_id={project.tag_id} />
                    )
                })}
            </ul>
        )

    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsCard);
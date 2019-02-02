import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectsList from '../ProjectsList/ProjectsList.js'

class ProjectsCard extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }


 

    render() {
        return (
            <ul>
                
                {this.props.reduxStore.projectsReducer.map(( project, i) => {
                    return (
                        <ProjectsList key={i} project={project} name={project.name} description={project.description} 
                        thumbnail={project.thumbnail} website={project.website} date_completed={project.date_completed} 
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
import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectsList from '../ProjectsList/ProjectsList.js'
import { Card, TextField, Button, Grid } from '@material-ui/core'

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
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Card>
            <ul>
                
                {this.props.reduxStore.projectsReducer.map(( project, i) => {
                    return (
                       
                        <ProjectsList key={i} project={project} name={project.name} description={project.description} 
                        thumbnail={project.thumbnail} website={project.website} date_completed={project.date_completed} 
                        tag_id={project.tag_id} />
                    )
                })}
                </ul>
                    </Card>
                </Grid>
            </Grid>
                    
        )
    }
}



const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsCard);
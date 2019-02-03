import React, { Component } from "react";
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';



class AdminProjectPage extends Component {

    componentDidMount() {
        
        this.getProjects();
    }

    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }


    render() {

        return (
            <Card>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Thumbnail</th>
                            <th>Github Link</th>
                            <th>Website Link</th>
                            <th>Date Completed</th>
                            <th>Language Tag</th>
                        </tr>
                    </thead>
                <tbody>
                {this.props.reduxStore.projectsReducer.map((project, i) => {
                    return (<tr key={i}>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td> {project.thumbnail} </td>
                        <td>  {project.github}</td>
                        <td>{project.website}</td>
                        <td >{project.date_completed}</td>
                        <td>{project.tag_id} </td>
                        <button>Delete</button>
                    </tr>
                    
                    )
                })}
                    </tbody>
                    </table>
            

            </Card>

            




            )

}
}





const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(AdminProjectPage);
import React, { Component } from "react";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

class AdminProjectPage extends Component {

    //tried to create for delete functioon
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }

    //runs when page runs
    componentDidMount() {
        this.getProjects();
    }

    //talks to saga with action type- gets info from reducer
    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

    //talks to saga with action type- gets info from reducer
    handleDeleteID = (event) => {
        console.log('handleDateChange', event.target.value);
        this.setState({
            id: event.target.value
        });
    }

    //not able to get funciton to work - would send correct value on click but could not 
    //get correct syntax in delete router
    // deleteProject = (event) => {
    //     console.log('in delete', this.state.id) ;
    //     this.setState({
    //         id: event.target.value

    //     const action = { type: 'DELETE_PROJECT', payload:id } };
    //     this.props.dispatch(action)
    // });
    // }

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
                        {/* maping out data received from projects reducer */}
                        {this.props.reduxStore.projectsReducer.map((project, i) => {
                            return (<tr key={i}>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td> {project.thumbnail} </td>
                                <td>  {project.github}</td>
                                <td>{project.website}</td>
                                <td >{project.date_completed}</td>
                                <td>{project.name} </td>
                                <button onClick={this.deleteProject} onChange={this.handleDeleteId} value={project.id}>Delete</button>
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
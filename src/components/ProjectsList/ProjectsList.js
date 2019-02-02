import React, { Component } from "react";
import { connect } from 'react-redux';

class ProjectsList extends Component {

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
                <li>
                    <span>
                            <td>{this.props.project.name}</td>
                            <td>{this.props.project.description}</td>
                            <td>{this.props.project.thumbnail}</td>
                            <td>{this.props.project.website}</td>
                            <td>{this.props.project.date_completed}</td>
                            <td>{this.props.project.tag_id}</td>
                         
               
                    </span>
                </li>

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsList);
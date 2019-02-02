import React, { Component } from "react";
import { connect } from 'react-redux';

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
                {/* { this.props.reduxStore.projectsReducer.map((project) => {
                        return <ProjectsList key={projectsid} favorite={favorite} />
                    })
                } 

                {JSON.stringify(this.props.reduxStore.projectsReducer.name)}
                <h1>[{this.props.reduxStore.projectsReducer}]</h1> */}
                
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Projects);
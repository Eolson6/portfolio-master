import React, { Component } from 'react';
import { connect } from 'react-redux';

// simple header- can add syling as needed
class ProjectsHeader extends Component {
    render() {
        return (
            <div>
                <h1>Erin Olson</h1>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});


export default connect(mapReduxStoreToProps)(ProjectsHeader);
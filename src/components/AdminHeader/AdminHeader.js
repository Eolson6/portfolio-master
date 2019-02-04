import React, { Component } from 'react';
import { connect } from 'react-redux';


//simple header- will possibly add styling in the future
class AdminHeader extends Component {
    render() {
        return (
            <div>
                <h1>Admin Page</h1>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});


export default connect(mapReduxStoreToProps)(AdminHeader);
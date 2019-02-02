import React, { Component } from "react";
import { connect } from 'react-redux';

class ProjectsList extends Component {


    render() {
        return (
            <div>
                {/* { this.props.reduxStore.projectsReducer.map((project) => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                    });
                } */} */}

                {JSON.stringify(this.props.reduxStore.projectsReducer.name)}
                <h1>[{this.props.reduxStore.projectsReducer}]</h1>

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsList);
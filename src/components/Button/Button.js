import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Button extends Component {

    displayGithub() {
        if (!this.props.project.gitHub) {
            return null;
        } else {
            return (this.props.project.date_completed)
        }

    }

    displayWebsite() {
     
    }


    render() {

        return (

            <ul>
                {if (!this.props.project.website) {
            return null;
        } else {
            return (this.props.project.website)
            }
                
        </Button>
                <Button size="small" color="primary" variant="outlined">
                    Link to Github
        </Button>

            </ul>
        )

    }
}





const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Button);
import React, { Component } from "react";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

class ProjectsList extends Component {

    // runs when page loads
    componentDidMount() {
        this.getProjects();

    }
    //talks to saga with action type- gets info from reducer
    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }


    //function related to button to open github in a new page
    goToGithub = () => {
        window.open('http://www.github.com');

    }
    render() {

        //conditional - will only render if data recieved
        let githubButton = '';
        if (!this.props.project.github) {
            githubButton = null
        } else {
            githubButton =
                <Button onClick={this.goToGithub} color=" primary" variant="outlined">
                    GitHub
        </Button>

        }
        //conditional - will only render if data recieved
        let displayGithub = '';
        if (!this.props.project.github) {
            displayGithub = null
        } else {
            displayGithub = <Typography component="p">
                {this.props.project.github}

            </Typography>
        }

        //conditional - will only render if data recieved
        let displayWebsite = '';
        if (!this.props.project.website) {
            displayWebsite = null
        } else {
            displayWebsite = <Typography component="p">
                {this.props.project.website}
            </Typography>
        }

        //conditional - will only render if data recieved
        let displayProjectDate = '';
        if (!this.props.project.date_completed) {
            displayProjectDate = null
        } else {
            displayProjectDate = <Typography component="p">
                {this.props.project.date_completed}
            </Typography>
        }

        //conditional - will only render if data recieved
        let displayTagId = '';
        if (!this.props.project.description) {
            displayTagId = null;
        } else {
            displayTagId = <Typography component="p">
                {this.props.project.displayTagId}
            </Typography>
        }

        //conditional - will only render if data recieved
        let displayThumbnail = ''
        if (!this.props.project.thumbnail) {
            displayDescription = null;
        } else {
            displayThumbnail =
                <img src={this.props.project.thumbnail} alt="project thumbnail" height="140" />
        }

        //conditional - will only render if data recieved
        let displayDescription = ''
        if (!this.props.project.description) {
            displayDescription = null;
        } else {
            displayDescription = <Typography component="p">
                {this.props.project.description}
            </Typography>
        }

        return (
            < Card >

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.project.name}
                    </Typography>
                    {/* items only display if property has data */}
                    {displayThumbnail}
                    <div clasName='projectList'>
                    {displayTagId}
                    {displayProjectDate}
                    {displayDescription}
                    {displayTagId}
                    {displayWebsite}
                    {displayGithub}
                    </div>
                </CardContent>
                <CardActions>
                    {/* items only display if property has data */}
                    {githubButton}
                </CardActions>
            </Card>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsList);


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

    componentDidMount() {
        this.getProjects();

    }

    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }


    render() {

        let websiteButton = ''
        if (!this.props.project.website) {
            websiteButton = null
        } else {
            websiteButton = <Button size="small" color="primary" variant="outlined">
                Link to website
        </Button>

        }


        let githubButton = '';
        if (!this.props.project.github) {
            githubButton = null
        } else {
            githubButton = <Button size="small" color="primary" variant="outlined">
                Link to Github
        </Button>

        }


        let displayProjectDate = '';
        if (!this.props.project.date_completed) {
            displayProjectDate = null
        } else {
            displayProjectDate = <Typography component="p">
                {this.props.project.date_completed}
            </Typography>
        }


        let displayTagId = '';
        if (!this.props.project.description) {
            displayTagId = null;
        } else {
            displayTagId = <Typography component="p">
                {this.props.project.displayTagId}
            </Typography>
        }



        let displayThumbnail = ''
        if (!this.props.project.thumbnail) {
            displayDescription = null;
        } else {
            displayThumbnail =
                < Typography component="p" >
                    {this.props.project.thumbnail}
                </Typography >
        }


        let displayDescription = ''
        if (!this.props.project.description) {
            displayDescription = null;
        } else {
            displayDescription = <Typography component="p">
                {this.props.project.description}
            </Typography>
        }




        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.project.name}
                        </Typography>

                        <div clasName='projectList'>
                            {displayTagId}
                            {displayThumbnail}
                            {displayProjectDate}
                            {displayDescription}
                            {displayTagId}
                        </div>
                    </CardContent>
                </CardActionArea>


                <CardActions>

                    {githubButton}
                    {websiteButton}
                </CardActions>

            </Card>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsList);

{/* <td>{this.props.project.name}</td> 
                            <br></br>
                            <td>{this.props.project.description}</td>
                    <br></br>
                            <td>{this.props.project.thumbnail}</td>
                    <br></br>
                            <td>{this.props.project.website}</td>
                    <br></br>
                            <td>{this.props.project.date_completed}</td>
                    <br></br>
                            <td>{this.props.project.tag_id}</td>  */}
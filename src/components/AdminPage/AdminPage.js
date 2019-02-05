import React, { Component } from "react";
import { connect } from 'react-redux';
import AdminProjectPage from '../AdminProjectPage/AdminProjectPage.js';
import AdminHeader from '../AdminHeader/AdminHeader.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CardActionArea } from "@material-ui/core";


class AdminPage extends Component {

    //runs once when page loads
    componentDidMount() {
        this.getTags();
        this.getProjects();
    }

    //talks to saga with action type- gets info from reducer
    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

    //talks to saga with action type- gets info from reducer
    getTags = () => {
        const action = { type: 'GET_TAGS' };
        this.props.dispatch(action);
    }

    //set state to gather input from user
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
        }
    }





    // Function called as the user input changes - updates corresponding state in function
    handleTagChange = (event) => {
        console.log('handleTagChange', event.target.value);

        this.setState({
            tag_id: event.target.value
        });
    }


    // Function called as the user input changes - updates corresponding state in function
    handleDateChange = (event) => {
        console.log('handleDateChange', event.target.value);
        this.setState({
            date_completed: event.target.value
        });
    }

    // Function called as the user input changes - updates corresponding state in function
    handleGithubChange = (event) => {
        console.log('handleGithubChange', event.target.value);
        this.setState({
            github: event.target.value
        });
    }

    // Function called as the user input changes - updates corresponding state in function
    handleWebsiteChange = (event) => {
        console.log('handleWebsiteChange', event.target.value);
        this.setState({
            website: event.target.value
        });
    }

    // Function called as the user input changes - updates corresponding state in function
    handleThumbnailChange = (event) => {
        console.log('handleThumbnailChange', event.target.value);
        this.setState({
            thumbnail: event.target.value
        });
    }

    // Function called as the user input changes - updates corresponding state in function
    handleNameChange = (event) => {
        console.log('handleNameChange', event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    // Function called as the user input changes - updates corresponding state in function
    handleDescriptionChange = (event) => {
        console.log('handleDescriptionChange', event.target.value);
        this.setState({
            description: event.target.value
        });
    }

    //creates object on submit and sends object to saga to update the database
    handleSubmit = (event) => {
        const newProject = {
            name: this.state.name,
            description: this.state.description,
            thumbnail: this.state.thumbnail,
            website: this.state.website,
            github: this.state.github,
            date_completed: this.state.date_completed,
            tag_id: this.state.tag_id

        }
        console.log('in handleSubmit');
        const action = { type: 'ADD_PROJECT', payload: newProject };
        this.props.dispatch(action)
        this.setState({
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
        })
        alert('New Project Added')
    }

    //corresponds with button - will navigate user from admin page to 
    //projects page
    returnToProjects = (event) => {
        this.props.history.push('projects');
    }

    render() {

        return (
            <form>
                {/* imported form admin heaader component */}
                <AdminHeader />
                user imputs data
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} />
                {/* input type file uploads from computer - only stores words in database at this time */}
                <input type="file" name="image" accept="immage/*" placeholder="thumbnail" value={this.state.thumbnail} onChange={this.handleThumbnailChange} />
                <input type="url" placeholder="website" value={this.state.website} onChange={this.handleWebsiteChange} />
                <input type="url" placeholder="github link" value={this.state.github} onChange={this.handleGithubChange} />
                {/* changed date input from date to var char for functionality  */}
                <input type="date" placeholder="DD-MM-YYYY" value={this.state.date_completed} onChange={this.handleDateChange} />
                <select onChange={this.handleTagChange} value={this.state.tag_id}>
                    <option value="">Select Tag</option>
                    {this.props.reduxStore.tags.map((tag, i) => {
                        return <option key={i} value={tag.id}>{tag.name}</option>
                    })}
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
                <AdminProjectPage />
                <CardActionArea>
                    <BottomNavigation>
                  
                        <BottomNavigationAction onClick={this.returnToProjects} label="Return to main page" value="Return to Project page" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </CardActionArea>
            </form>


        )

    }
}





const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(AdminPage);
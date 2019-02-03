import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectsList from '../ProjectsList/ProjectsList.js'


class AdminPage extends Component {
    componentDidMount() {
        this.getTags();
        this.getProjects();
    }

    getProjects = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

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

  

    getTags = () =>{
        
        const action = { type: 'GET_TAGS'};
        this.props.dispatch(action);
        
    }

    // Function called as the user input changes
    handleTagChange = (event) => {
        console.log('handleTagChange', event.target.value);
        
        this.setState({
            tag_id: event.target.value
        });
    }


    handleDateChange = (event) => {
        console.log('handleDateChange', event.target.value);
        this.setState({
            date_completed: event.target.value
        });
    }

    handleGithubChange = (event) => {
        console.log('handleGithubChange', event.target.value);
        this.setState({
            github: event.target.value
        });
    }

    handleWebsiteChange = (event) => {
        console.log('handleWebsiteChange', event.target.value);
        this.setState({
            website: event.target.value
        });
    }

    handleThumbnailChange = (event) => {
        console.log('handleThumbnailChange', event.target.value);
        this.setState({
            thumbnail: event.target.value
        });
    }

    handleNameChange = (event) => {
        console.log('handleNameChange', event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    handleDescriptionChange = (event) => {
        console.log('handleDescriptionChange', event.target.value);
        this.setState({
            description: event.target.value
        });
    }

    render() {

        return (

            <form>
                <h1>Admin Page</h1>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
                <input type="text" value={this.state.thumbnail} onChange={this.handleThumbnailChange} />
                <input type="text" value={this.state.website} onChange={this.handleWebsiteChange} />
                <input type="text" value={this.state.github} onChange={this.handleGithubChange} />
                <input type="text" value={this.state.date_completed} onChange={this.handleDateChange} />
                <select onChange={this.handleTagChange} value={this.state.tag_id}>
                    <option value="">Select Tag</option>
                    {this.props.reduxStore.tags.map((tag, i) => {
                        return <option key={i} value={tag.name}>{tag.name}</option>
                    })}
                    </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
                
            // <ProjectsList key={i} project={project} name={project.name} description={project.description}
            //     thumbnail={project.thumbnail} github={project.github} website={project.website} date_completed={project.date_completed}
            //     tag_id={project.tag_id} />
            
        )

    }
}





const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(AdminPage);
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

    displayDescription() {
        if (!this.props.project.description) {
        return null;
    } else{
        return (this.props.project.description)
    }
}
    
    displaythumbnail() {
            if(!this.props.project.thumbnail) {
            return null;
            } else {
                return (this.props.project.thumbnail)
            }
    }

    displayWebsite() {
        if (!this.props.project.website) {
            return null;
        } else {
            return (this.props.project.website)
        }
    }

    displayProjectDate() {
        if (!this.props.project.date_completed) {
            return null;
        } else {
            return (this.props.project.date_completed)
        }

    }
   
    displayTagId(){
        if (!this.props.project.tag_id) {
            return null;
        }

    }
    


    render() {
 
       
        return (
            
                        <div clasName='projectList'>
                        {this.props.project.name}
                        <br></br>
                          {this.displayDescription()}
                <br></br>
                        {this.displaythumbnail()}
                <br></br>
                          {this.displayWebsite()}
                <br></br>
                {this.displayProjectDate()}
                <br></br>
                          {this.displayTagId()}
                            
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
                         
                        

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectsList);
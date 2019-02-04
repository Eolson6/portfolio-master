# React Redux with Sagas
Application is a portfolio site to showcase your work. 

## Setup

- Create a database named portfolio
- Run the SQL located in database.sql using the portfolio database:
    
    - dependencies": 
    
    "@material-ui/core": "^3.9.1",
    "@material-ui/icons": "^3.0.2",
    "@material-ui/styles": "^3.0.0-alpha.9",
    "axios": "^0.18.0",
    "classnames": "^2.2.6",
    "dom": "0.0.3",
    "express": "^4.16.4",
    "parser": "^0.1.4",
    "pg": "^7.8.0",
    "prop-types": "^15.6.2",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-redux": "^5.1.1",
    "react-router-dom": "^4.3.1",
    "react-scripts": "^2.1.3",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-saga": "^0.16.2",
    "router": "^1.3.3",
    "server": "^1.0.18"

1. `npm install`
1. `npm run server`
1. `npm run client`


### Project Page  features/functionality 

- Client side route that displays projects that are stored in the database
- Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- Include a link to GitHub that opens in a new window
- Add your name at the top of the page
- Use Sagas for API requests to your server

### Admin Page features/functionality 

-  Client side route that displays a form allowing you to add a new project to your          portfolio
- Include a drop down menu with a list of tags
-  Send data to the server and notify the user of success or failure
-  List projects by name and allow the user to delete them
- Include a button that navigates to the project page


## Future Goals

- Use the GitHub API to get user information to display at the top of the page
- Improve styling on the page using Material UI
- Include a form on the admin page for adding new tags
- Implement additional features of the GitHub API

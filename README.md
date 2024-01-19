
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
First. 
# Node installation on Windows
Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.
## check version
node --version
## npm
npm --version
## npm i -save if you dont have node modules
If you met this error "'react-scripts' is not recognized as an internal or external command' "
## npm install react-scripts --save

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

1. src - project source code
2. config.js - app configuration file (port, method,...)
3. webpack.config.js - webpack configuration file
4. package.json - Declare necessary modules, libraries,...
/src/
    |-- assets/ - folder containing fonts, images, lib js, css,...
    |-- api.js - declare endpoints
|-- interface/
    |-- components/ - common components
    |-- pages/ - all pages we have
    
|-- favicon.ico
|-- index.html - HTML entry
|-- index.js - App entry


Dashboard files flow:


DashboardLayout component:
    DashboardHeader
    Sidebar
    ProfileColumn
    DashboardContents

DashboardHeader component:
    SearchBar

Sidebar component:
    MyClassesCard

ProfileColumn component:
    DashboardCard
    DashboardProfileChart

DashboardContents component :
    TutorRankingTable
    TutorHoverCard
    StudentReviewCard
    TutorCard

MyClassPageContents component:
    DropdownSelector
    CalenderSelector
    Button
    MyClassesTable

MyCoursesContents component:
    DropdownSelector
    Button

SessionsContents component:
    DropdownSelector
    CalenderSelector
    TimeSelector
    Button
    SessionsTable

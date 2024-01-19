
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
First. 
# Node installation on Windows
Just go on [official Node.js website](http://nodejs.org/) website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.
## check version
node --version
## npm
npm --version
## npm i -save if you dont have node modules
If you met this error "'react-scripts' is not recognized as an internal or external command' "
## npm install react-scripts --save

## change url.js in project directory to
export const BASE_URL = `http://localhost:8080`

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

## How to use this app
Use register

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/1d110722-0228-4664-8b68-c9df05255368)

Register new account 

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/e736c890-f8c5-40d2-828b-2af24e131e0f)

Sign in again

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/58424241-15df-466a-87e9-64c7d54445ce)

This is main page

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/43dbc1f9-4049-45f2-8f44-b5887ba32e73)

Go to [course page] and you can see a lot of courses

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/a24cbaed-9d97-4b17-946a-e7785f298cca)

When you click add to cart it will redirect to [Cart page]

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/fe087313-70c3-4a91-83ac-50d0d31515f8)

 You can either continue shopping, [Clear Cart] or checkout this course
 
 ![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/cd90e18b-e409-4045-8f30-e0677f12cbde)

If you choose [continue shopping] or [Clear Cart] it will turn back [Cart Page]. If you Checkout you going to go [Checkout Page]

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/ceaa353b-03b6-42f7-b406-9684c175fa9d)

You can use either paypal method or Continue shopping

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/b763af17-781d-4927-a510-4d9786af77d4)

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/b4b9cf80-9ad7-4b6f-85b5-063660c2aee6)

![image](https://github.com/elucidator0409/Hackathon_CourseProject/assets/111008870/25557df0-938f-4109-8051-25153fe76f84)

At the main page you click [Dashboard] you will see [My course] and [Hour purchase history].

![Screenshot 2024-01-19 at 17 07 51](https://github.com/elucidator0409/Hackathon_CourseProject/assets/40190246/f462b204-dfaf-48f5-9557-734b35108fce)

With [My courses] This is where the courses you have purchased are located.

![Screen Shot 2024-01-19 at 17 09 30 PM](https://github.com/elucidator0409/Hackathon_CourseProject/assets/40190246/77feb979-c285-4dcb-af20-45e6a81a3bc8)

With [Hour purchase] history contains order information.
When you added course then it will be locked.

![Screen Shot 2024-01-19 at 17 09 53 PM](https://github.com/elucidator0409/Hackathon_CourseProject/assets/40190246/f7b56650-42ad-4c66-96dd-66066e93c93b)



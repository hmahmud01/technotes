# Tech Notes Front End

Developed in React Js and for styling UIKit V3 has been used.

Project Requirements:
1. Node Js
2. npm
3. create-react-app 

## Application run Guide
1. First clone the project `https://github.com/hmahmud01/technotes.git`
2. Inside the directory folder run `npm install` command to install necessary libraries.
3. Run `npm start` to run the project
4. go to `http://localhost:3000` to browse the application in the project.

Project Url will always redirect to Login page for first time.

Project Demo Link: [Heroku Link - https://secret-journey-29359.herokuapp.com/](https://secret-journey-29359.herokuapp.com/).

## Project Development and Structure
Full Project has been designed in SPA and not responsive.
No Additional Library has been used or installed to accomplish this project. For state management simple react hooks has been used. For api calls simple javascript fetch function has been Used. All the components are designed with corresponding rendering html elements and callback functions.
User information including the `jwt` from server is stored in browsers localStorage.
Project Local Asset files are placed inside `public/assets` folder.
Project Components are placed inside `src/components` folder. Components are Listed below

0. MainApp component - controls the app root page, it determines whether to redirect to Login Page or Application Page.
1. Login Component - User login and signup component. if user is not signed up, he can directly sign up and login using his email
2. Main Component - It contains every funcional components for this App.

Note: This Project has been developed only for technical evaluation for React Dev position in Tech Care.

Project Documentation Ends Here.

Thanks-
Hasan Mahmud

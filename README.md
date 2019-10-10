This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Module Project: Component Side Effects- NASA APOD
This will be a two-module project. In it you will consume the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface. After the second module (in the DAY_TWO_README.md file) you will re-style your app using one of the libraries you learn.

Instructions
Read these instructions carefully. Understand exactly what is expected before starting this project.

Commits
Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

Description
In this project you will build out a application to show the nasa photo of the day.

Project Set Up
This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

 Create a forked copy of this project.
 Add your team lead as collaborator on Github.
 Clone your OWN version of the repository in your terminal
 Download project dependencies by running one of these two commands yarn or npm install
 Using the same command tool (yarn or npm) start up the app using yarn start or npm start
 Create a new branch: git checkout -b <firstName-lastName>. Implement the project on your newly created <firstName-lastName> branch, committing changes regularly.
 Push commits: git push origin <firstName-lastName>.
Follow these steps for completing your project.

 Submit a Pull-Request to merge Branch into master (student's Repository).
 Add your team lead as a reviewer on the pull-request
 Your team lead will count the project as complete by merging the branch back into master.
 Do your magic!
Project - NASA APOD - Part I
This is a really fun project, and one to show your family and friends when you've finished.
You will be starting from scratch and building the entire app
You don't have any design specs to follow for this project, so you may want to start by building a basic wireframe first. Make it simple at the beginning, since you don't know what data you'll be getting back from NASA
Once you get the data back, there may be more than you expected, or less than you expected, so your design plans may change. That's totally fine, and very normal in the real world. Just make the proper adjustments and move forward!
Directions
Step 1 - Planning

If you want, this is the time to make a simple design spec (look up "simple wireframes" to find resources & examples). A pen & paper sketch (or outline) is often the fastest way to start your planning.
Once you have a design plan in mind, break down the designs into individual components.
Plan which components will hold state, what data each needs from props (if any), and where you will be making your data fetch.
Now it's time to jump into the code!
Step 2 - File structure

Take a look at your planned components. Create the folders and files you need for each component.
Leave most of them blank for now - you need to get your data from the API before you can really get these built.
Step 3 - Fetching the Data

In App.js (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
Add an effect hook to handle the API call side effect.
Go to the NASA APOD API docs and read through the docs to see how to make the API call.
You don't need an API key. However you may need one if you exceed the API request limits.
Using the endpoint given, fetch the data using axios.
In your .then() make sure to console.log the response so you can look at the shape of the data. 😃
Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.
DEMO KEY rate limits:

Hourly Limit: 30 requests per IP address per hour

Daily Limit: 50 requests per IP address per day

Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: &date=2012-03-14

Step 4 - Adding the Data to State

Once you have made the call correctly, and logged the data, add the data to the state property you built.
Step 5 - Display the Data Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

MVP Requirements:
Use the effect hook to fetch the APOD data when the component mounts.
Display the APOD data in different components that are composed together to build your UI.
Pro Tips:
You may run into an error where your components try to access object properties before your data is finished being fetched - ie. Cannot read property 'url' of undefined. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:
// Display a loading message while the data is fetching
if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  {* your normal JSX here *}
);
Read through the API docs carefully. You will read through many technical docs as a developer, so start now to try and understand them.
Stretch Problems
Do not attempt stretch problems until MVP has been reached and a final commit has been made.

Notice the optional query param date? You can pass a different date in your url like this https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14 to get the APOD from a different date. Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out
Make another app that consumes another one of NASA's other APIs listed on the same website

NASA APOD Part II - Advanced Styling Techniques
In this project you will refactor the styling you completed in the APOD app. You will style it using one of the styling libraries you learned in this module.

Instructions
Read these instructions carefully. Understand exactly what is expected before starting this project.

Commits
Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

Project Set Up
This homework is a continuation of the work you have done previously.

 CD into your old project
 Continue to make changes and push to the same branch
Follow these steps for completing your project.

 Submit a Pull-Request to merge Branch into master (student's Repository).
 Add your team lead as a reviewer on the pull-request
 Your team lead will count the project as complete by merging the branch back into master.
 Do your magic!
Project - NASA APOD (Continued...)
This will be a continuation of the project you've already started.
Our goal here is to apply advance styling techniques for your React application.
You don't need to start from scratch. Use the work you did previously.
Let's say that the designs have changed. There are new ways and implementations of doing things as time goes by. As stated earlier, these are normal in the real world. It's time for us to dig into the code to make it better.
MVP Requirements:
Refactor your project using a component library that was covered in class (Reactstrap or styled-components).
Implement and use at least a few styled components to beautify your project.
Stretch Problems
Do not attempt stretch problems until MVP has been reached and a final commit has been made.

Read the documentation for MaterialUI to use in place of Reactstrap or Emotion to use in place of styled-components and use either in your app.
Try out tailwind css. It's a little tough to get it started in your app, but it's a great library that is gaining popularity very quickly. Here are the docs, and here is an article to help you get it started in a React app (written by Max David, a Lambda student).
Implement snapshot testing in your react application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


- Challenge Description:
Create a React application that fetches a list of posts from a JSONPlaceholder API and displays them. Use Redux for state management and async actions to fetch the data.

- Requirements:
1. Set up a React project with Redux and Redux Thunk for async actions.
2. Create a Redux store to manage the state of your application.
3. Define Redux actions and reducers for fetching and storing posts data.
4. Create a React component (PostList) that connects to the Redux store to fetch and display a list of posts.
5. Use asynchronous actions to fetch the list of posts from the JSONPlaceholder API when the PostList component is mounted.
6. Display the list of posts with their titles and bodies in a user-friendly format (e.g., in a list or cards).
7. Handle loading, success, and error states when fetching data and display appropriate messages to the user.
8. Add a button or UI element that allows the user to refresh or re-fetch the data.

- API Endpoint:
You can use the JSONPlaceholder API for this challenge. The endpoint to fetch posts is: https://jsonplaceholder.typicode.com/posts

- Hints:
. You'll need to set up Redux, create action creators for fetching posts, define reducers, and connect the component to Redux using the connect function or React Redux hooks.
. Use Redux Thunk middleware to handle asynchronous actions in Redux.
. Make use of useEffect in your React component to trigger the data fetching when the component is mounted.
. Display loading and error messages based on the status of the async operation.
. Ensure that your Redux store stores the fetched posts data.
. Implement a button or UI element to allow users to refresh the data.

Remember to install necessary dependencies (React, Redux, Redux Thunk) and set up your project accordingly. This challenge will help you practice asynchronous data fetching, Redux state management, and rendering data in a React application.
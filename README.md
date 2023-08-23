Mortgage Calculator App
This is a simple Mortgage Calculator app built using React and Material-UI components. The app allows users to calculate their mortgage loan details based on the input values for home value, down payment, interest rate, and loan term.

Features
Input sliders for selecting the Home Value and Loan Tenure.
Dropdown select for choosing the Loan Tenure.
Real-time calculation of Down Payment and Loan Amount based on the selected Home Value.
Display of the calculated mortgage details, including the monthly payment and total interest.
Installation
To run the Mortgage Calculator app on your local machine, follow these steps:

Clone the repository to your local machine:
git clone <https://github.com/divyagupta167/Loan-Calculator>
Navigate to the project directory:
cd mortgage-calculator-app
Install the required dependencies:
npm install
Start the development server:
npm start
The app will be available at http://localhost:3000 in your web browser.

Usage
Drag the slider to select the Home Value. The Down Payment and Loan Amount will be updated automatically based on the selected Home Value.

Use the dropdown select to choose the Loan Tenure (in years).

The app will recalculate the mortgage details whenever you make changes to the Home Value or Loan Tenure.

The Result section will display the calculated mortgage details, including the Monthly Payment and Total Interest.

How it works
The app is built using React and Material-UI components. It utilizes the useState hook to manage the state of the input values. The main components of the app are as follows:

SliderSelect: This component provides sliders to select the Home Value and dropdown to choose the Loan Tenure. It communicates with the parent App component through the setData prop to update the state.

TenureSelect: This component is responsible for selecting the Loan Tenure. It also communicates with the parent App component through the setData prop to update the state.

Result: This component receives the mortgage data from the App component as a prop and displays the calculated mortgage details.

Navbar: This component represents the navigation bar at the top of the app.

Dependencies
The app uses the following dependencies:

@mui/material: Material-UI components library for the UI elements.
react: The core library for building user interfaces in React.
react-dom: A package that provides DOM-specific methods that can be used at the top level of a web application to enable interaction with React.






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

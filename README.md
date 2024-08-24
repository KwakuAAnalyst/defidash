# DeFi Dashboard
A React-based DeFi dashboard that displays real-time token prices and protocol TVL (Total Value Locked) using Chainlink price feeds. The app interacts with Ethereum blockchain data via Web3 and Chainlink plugins.

## Features

- Displays real-time prices for multiple tokens (BTC, ETH, LINK, UNI, AAVE).
- Shows TVL for popular DeFi protocols (Uniswap, Aave, Compound).
- Refresh data on demand with a user-friendly interface.

## Technologies Used

- **React**: For building the user interface.
- **Web3.js**: For interacting with Ethereum blockchain.
- **Chainlink Plugin**: For fetching real-time price feeds.
- **CSS**: For styling the application.

## Prerequisites

Before you start, ensure you have the following:

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- A modern web browser with MetaMask or other Ethereum wallet extension installed.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/defi-dashboard.git
   cd defi-dashboard

# Usage

Token Prices: Displays the current prices for BTC, ETH, LINK, UNI, and AAVE in USD.
Protocol TVL: Displays estimated TVL values for Uniswap, Aave, and Compound. Note that this data is simulated and not fetched from real APIs in this version.

# How It Works
Web3.js Initialization: The app uses Web3.js to interact with the Ethereum blockchain.
Chainlink Plugin: The ChainlinkPlugin is registered to fetch real-time price data.
Data Fetching: On component mount and when the "Refresh Data" button is clicked, the app fetches token prices and protocol TVL.

# Code Overview
App.js: Main React component managing state and fetching data.

tokenPrices: Stores real-time token prices.
protocolTVL: Stores simulated protocol TVL values.
fetchData(): Fetches both token prices and protocol TVL.
getTokenPrices(): Fetches prices using Chainlink price feeds.
getProtocolTVL(): Simulates fetching TVL data for demonstration.
App.css: Contains styles for the app, including button styles and layout for the dashboard sections.


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

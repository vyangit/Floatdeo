/**
 * index.js
 * 
 * Setup script for the landing page of the ElectronJS app
 */

// Node modules
import React from 'react';
import ReactDOM from 'react-dom';

// Locals
import App from "App.js";
import "Styles/style.css";
import "Styles/bootstrap.css";

ReactDOM.render(<App/>, document.getElementById("root"));
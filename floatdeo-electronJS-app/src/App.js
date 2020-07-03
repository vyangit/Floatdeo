/**
 * App.js
 * 
 * Main container component for the application
 */

// Node modules
const React = require('react');

// Locals
import FloatdeoMainPage from 'Pages/FloatdeoMainPage'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FloatdeoMainPage/>
        );
    }
}


/**
 * App.js
 * 
 * Main container component for the application
 */

// Node modules
var React = require('react');

// Locals
import FloatdeoMainPage from './js/pages/FloatdeoMainPage'

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


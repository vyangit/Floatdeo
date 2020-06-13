/**
 * OptionButtonComponent.js
 * 
 * Template for the option buttons for the bottom option bar
 */

// Node modules
const React = require('react');
const PropTypes = require('prop-types');

// Locals


export default class OptionButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div></div>
    }
}

OptionButtonComponent.propTypes = {
    eventCb: PropTypes.func.isRequired,
    relativeIconSrc: PropTypes.string.isRequired
}
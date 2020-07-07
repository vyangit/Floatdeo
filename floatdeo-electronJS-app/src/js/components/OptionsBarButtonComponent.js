/**
 * OptionButtonComponent.js
 * 
 * Template for the option buttons for the bottom option bar
 */

// Node modules
import React from 'react';
import PropTypes from 'prop-types';

// Locals


export default class OptionsBarButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <button type="button" className="options-bar-button btn btn-primary" onClick={this.props.eventCb}>
            {this.props.icon}
        </button>)
    }
}

OptionsBarButtonComponent.propTypes = {
    eventCb: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired //JSX react material icon component
}
/** 
* ModalWrapperComponent.js
*
* Wrapper element for modals
* 
*/

// Modules
import React from 'react';

// Locals

export default class OverlayWrapperComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="overlay-wrapper">
                <div className="overlay-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

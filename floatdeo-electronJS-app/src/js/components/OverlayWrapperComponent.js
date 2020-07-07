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
        var style = {};

        if (this.props.isShown) {
            style['display'] = 'block';
            style['opacity'] = 1;
        }

        return (
            <div className="overlay-wrapper" style={style} >
                <div className="overlay-wrapper-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

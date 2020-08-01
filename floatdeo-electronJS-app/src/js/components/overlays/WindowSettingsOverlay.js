/** 
* WindowSettingsModal.js
*
* Displays and edits the containing desktop window for
* the Floatdeo app
* 
*/

// Modules
import React from 'react';

// Locals
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';

export default class WindowSettingsOverlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>
                <div className="overlay-header d-flex align-items-center justify-content-between">
                    <h5>Window Settings</h5>
                    <button type="button" className="btn btn-dark" aria-label="Close" onClick={this.props.closeOverlayCb}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="overlay-body">
                    
                </div>
            </OverlayWrapperComponent>
        );
    }
}

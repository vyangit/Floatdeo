/** 
* HistoryModal.js
*
* Displays a history list of previously saved web video source
* ved web video sources
* 
*/

// Modules
import React from 'react';

// Locals
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';
import VideoDetails from 'Objects/VideoDetailsObject';

export default class HistoryOverlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>
                <div className="overlay-header d-flex align-items-center justify-content-between">
                    <h5>History</h5>
                    <button type="button" className="btn btn-dark" aria-label="Close" onClick={this.props.closeOverlayCb}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </OverlayWrapperComponent>
        );
    }
}

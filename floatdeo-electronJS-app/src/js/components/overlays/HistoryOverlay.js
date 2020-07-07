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

export default class HistoryModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>

            </OverlayWrapperComponent>
        );
    }
}

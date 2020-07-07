/** 
* VideoSrcModal.js
*
* Shows a modal that allows the user to source a video from di
* urce a video from different web video references (i.e embedd
* ferences (i.e embedded video)
* 
*/

// Modules
import React from 'react';

// Locals
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';
import VideoDetails from 'Objects/VideoDetailsObject';

// Main class export
export default class VideoSrcModal extends React.Component {
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

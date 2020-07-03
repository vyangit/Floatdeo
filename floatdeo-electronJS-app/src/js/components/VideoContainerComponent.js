/** 
* VideoContainerComponents.js
*
* Floatdeo video container element
* 
*/

// Modules
import React from 'react';

// Locals
import {VideoSrcTypes} from 'Objects/VideoDetailsObject'

export default class VideoContainerComponent extends React.Component {
    constructor(props) {
        super(props)

        this.parseAndAdjustEmbeddedSrc = this.parseAndAdjustEmbeddedSrc.bind(this);
        this.parseVideoSrcFromWebsite = this.parseVideoSrcFromWebsite.bind(this);
    }

    parseAndAdjustEmbeddedSrc(htmlElement) {
        //TODO
    }

    parseVideoSrcFromWebsite(httpLink) {
        //TODO
    }

    render() {
        let vDetails = this.props.videoDetails;
        if (vDetails == null)  return null;
        
        switch (vDetails.type) {
            case VideoSrcTypes.EMBEDDED:
                return this.parseAndAdjustEmbeddedSrc(vDetails.rawSrcInputString)
                break;
            case VideoSrcTypes.WEB:
                return this.parseVideoSrcFromWebsite(vDetails.rawSrcInputString)
                break;
            default:
                return null;
        }
    }
}

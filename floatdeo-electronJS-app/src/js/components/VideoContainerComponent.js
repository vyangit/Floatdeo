/** 
* VideoContainerComponents.js
*
* Floatdeo video container element
* 
*/

// Modules
import React from 'react';
import $ from "jquery";

// Locals
import {VideoSrcTypes} from 'Objects/VideoDetailsObject'

export default class VideoContainerComponent extends React.Component {
    constructor(props) {
        super(props)

        this.parseAndAdjustEmbeddedSrc = this.parseAndAdjustEmbeddedSrc.bind(this);
        this.parseVideoSrcFromWebsite = this.parseVideoSrcFromWebsite.bind(this);
    }

    parseAndAdjustEmbeddedSrc(htmlElementAsRawString) {
        // Parse out the possible iframe from the embedded link
        let domParser = new DOMParser();
        let iframes= domParser.parseFromString(htmlElementAsRawString,'text/html').body.getElementsByTagName("IFRAME");
        
        // Embedded video is invalid fail case
        if (iframes.length == 0) return <div> Please provide a valid embedded video</div> 
        
        // Construct iframe for embedded link src
        let videoSrc = iframes[0].src;
        return <iframe width='100%' height='100%' src={videoSrc} allowFullScreen frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>;
    }

    parseVideoSrcFromWebsite(httpLinkAsString) {
        // TODO: Implement reverse look up to stream web link based videos 
        debugger
        console.log(httpLinkAsString);

        $.get(httpLinkAsString, function(data) {
            console.log(data);
        });
        return <div></div>;
    }

    render() {
        let vDetails = this.props.videoDetails;
        if (vDetails == null)  return null;
        let component = null;

        switch (vDetails.type) {
            case VideoSrcTypes.EMBEDDED:
                component = this.parseAndAdjustEmbeddedSrc(vDetails.rawSrcInputString)
                break;
            case VideoSrcTypes.WEB:
                component = this.parseVideoSrcFromWebsite(vDetails.rawSrcInputString)
                break;
        }

        return component == null ? <div></div> : component;
    }
}

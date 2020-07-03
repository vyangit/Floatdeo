/**
 * FloatdeoWindowSettings.js
 * 
 * Represents the window settings for the floatdeo window
 */


// File constants
const videoSrcTypes = {
    EMBEDDED:'embedded-link',
    WEB:'web-link'
}

// Default export
export default class VideoDetails {
    constructor(type, rawSrcInputString) {
        this.type = type;
        this.rawSrcInputString = rawSrcInputString;
    }
}

// Named exports
export {videoSrcTypes as VideoSrcTypes};
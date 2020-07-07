/**
 * FloatdeoMainPage.hs
 * 
 * Represents the main container/page for the floatdeo app
 */

// Node modules
import React from 'react';

// Locals
import VideoContainerComponent from 'Components/VideoContainerComponent';
import OptionsBarComponent from 'Components/OptionsBarComponent';

import WindowSettingsOverlay from 'Components/overlays/WindowSettingsOverlay';
import HistoryOverlay from 'Components/overlays/HistoryOverlay';
import VideoSrcOverlay from 'Components/overlays/VideoSrcOverlay';

// Assets
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';


export default class FloatdeoMainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOverlayId: null,
            videoDetails: null
        }
        
        this.overlayIds = {
            HISTORY: 'history',
            SETTINGS: 'settings',
            VIDEOSRC:'videoSrc'
        }

        this.setCurrentOverlay = this.setCurrentOverlay.bind(this);
        this.isShownCheck = this.isShownCheck.bind(this);
        
        this.setAndLaunchVideoSrc = this.setAndLaunchVideoSrc.bind(this);
        
    }

    setCurrentOverlay(overlayIdKey) {
        let currId = null;
        let tmp = this.overlayIds[overlayIdKey];

        if (this.state.currentOverlayId != tmp) {
            currId = tmp;
        }

        this.setState ({
            currentOverlayId: currId,
        });
    }

    isShownCheck(id) {
        return this.state.currentOverlayId == id;
    }

    setAndLaunchVideoSrc(videoDetails) {
        this.setState({
            videoDetails: videoDetails
        });
    }

    render() {
        let overlayIds = this.overlayIds;
        var orderedOptions = [
            [<OpenInBrowserIcon color="action" fontSize="large"/>, this.setCurrentOverlay.bind(this, 'VIDEOSRC')],
            [<HistoryIcon color="action" fontSize="large"/>, this.setCurrentOverlay.bind(this, 'HISTORY')],
            [<SettingsIcon color="action" fontSize="large"/>, this.setCurrentOverlay.bind(this, 'SETTINGS')]
        ]

        let closeOverlayFn = this.setCurrentOverlay.bind(this,null);

        return (
            <div className="floatdeo-main-container">
                <div className="main-display-container">
                    <VideoContainerComponent videoDetails={this.state.videoDetails}/>
                    <VideoSrcOverlay isShown={this.isShownCheck(overlayIds.VIDEOSRC)} closeOverlayCb={closeOverlayFn} srcVideoCb={this.setAndLaunchVideoSrc}/>
                    <HistoryOverlay isShown={this.isShownCheck(overlayIds.HISTORY)} closeOverlayCb={closeOverlayFn} srcVideoCb={this.setAndLaunchVideoSrc}/>
                    <WindowSettingsOverlay isShown={this.isShownCheck(overlayIds.SETTINGS)} closeOverlayCb={closeOverlayFn}/>
                </div>
                <OptionsBarComponent options={orderedOptions}/>
            </div>
        );   
    }
}


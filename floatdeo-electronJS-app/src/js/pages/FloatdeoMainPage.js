/**
 * FloatdeoMainPage.hs
 * 
 * Represents the main container/page for the floatdeo app
 */

// Node modules
import React from 'react';
import {CSSTransition} from 'react-transition-group';

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
            isOverlayDisplayed: false,
            currentOverlayId: null,
            videoDetails: null
        }
        
        this.overlayIds = {
            HISTORY: 'history',
            SETTINGS: 'settings',
            VIDEOSRC:'videoSrc'
        }

        this.setCurrentOverlay = this.setCurrentOverlay.bind(this);
        this.buildCurrentOverlayContents = this.buildCurrentOverlayContents.bind(this);
        this.setAndLaunchVideoSrc = this.setAndLaunchVideoSrc.bind(this);
        
    }

    setCurrentOverlay(overlayIdKey) {
        let currId = null;
        let tmp = this.overlayIds[overlayIdKey];

        if (this.state.currentOverlayId != tmp) {
            currId = tmp;
        }

        this.setState ({
            isOverlayDisplayed: currId != null,
            currentOverlayId: currId,
        });
    }

    buildCurrentOverlayContents() {
        let closeOverlayFn = this.setCurrentOverlay.bind(this,null);

        switch (this.state.currentOverlayId) {
            case this.overlayIds.VIDEOSRC:
                return <VideoSrcOverlay closeOverlayCb={closeOverlayFn} srcVideoCb={this.setAndLaunchVideoSrc}/>;
            case this.overlayIds.HISTORY:
                return <HistoryOverlay closeOverlayCb={closeOverlayFn} srcVideoCb={this.setAndLaunchVideoSrc}/>
            case this.overlayIds.SETTINGS:
                return <WindowSettingsOverlay closeOverlayCb={closeOverlayFn}/>
            default:
                // Do nothing
        }

        return <div></div>;
    }

    setAndLaunchVideoSrc(videoDetails) {
        console.log(videoDetails);
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

        return (
            <div className="floatdeo-main-container">
                <div className="main-display-container">
                    <VideoContainerComponent videoDetails={this.state.videoDetails}/>
                    <CSSTransition
                        in={this.state.isOverlayDisplayed}
                        timeout={500}
                        classNames="overlay-wrapper-transition"
                        mountOnEnter
                        unmountOnExit>
                            {this.buildCurrentOverlayContents()}
                    </CSSTransition>
                </div>
                <OptionsBarComponent options={orderedOptions}/>
            </div>
        );   
    }
}


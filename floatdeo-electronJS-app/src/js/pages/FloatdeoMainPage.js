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

import WindowSettingsModal from 'Components/modals/WindowSettingsModal';
import HistoryModal from 'Components/modals/HistoryModal';
import VideoSrcModal from 'Components/modals/VideoSrcModal';

// Assets
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';


export default class FloatdeoMainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModalId: null,
            videoDetails: null
        }
        
        this.modalIds = {
            HISTORY: 'history',
            SETTINGS: 'settings',
            VIDEOSRC:'videoSrc'
        }

        this.setCurrentModal = this.setCurrentModal.bind(this);
        this.isShownCheck = this.isShownCheck.bind(this);
        
        this.setAndLaunchVideoSrc = this.setAndLaunchVideoSrc.bind(this);
        
    }

    setCurrentModal(modalId) {
        var currId = null;
        if (this.modalIds.contains(modalId)) {
          currId = modalId
        } 

        this.setState ({
            currentModalId: currId,
        });
    }

    isShownCheck(id) {
        return this.props.currentModalId == id;
    }

    setAndLaunchVideoSrc(videoDetails) { // Type is embed or link
        this.setState({
            videoDetails: videoDetails
        });
    }

    render() {
        let mIds = this.modalIds;
        var orderedOptions = [
            [<OpenInBrowserIcon color="action" fontSize="large"/>, this.setCurrentModal.bind(this, mIds.VIDEOSRC)],
            [<HistoryIcon color="action" fontSize="large"/>, this.setCurrentModal.bind(this, mIds.HISTORY)],
            [<SettingsIcon color="action" fontSize="large"/>, this.setCurrentModal.bind(this, mIds.SETTINGS)]
        ]

        let closeModalFn = this.setCurrentModal.bind(this,null);

        return (
            <div className="floatdeo-main-container">
                <div className="main-display-container">
                    <VideoContainerComponent videoDetails={this.state.videoDetails}/>
                    <VideoSrcModal isShown={this.isShownCheck(mIds.VIDEOSRC)} cancelCb={closeModalFn} srcVideoCb={this.setAndLaunchVideoSrc}/>
                    <HistoryModal isShown={this.isShownCheck(mIds.HISTORY)} cancelCb={closeModalFn} srcVideoCb={this.setAndLaunchVideoSrc}/>
                    <WindowSettingsModal isShown={this.isShownCheck(mIds.SETTINGS)} cancelCb={closeModalFn}/>
                </div>
                <OptionsBarComponent options={orderedOptions}/>
            </div>
        );   
    }
}


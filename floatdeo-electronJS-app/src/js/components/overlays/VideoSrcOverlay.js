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

// Assets
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

// Main className export
export default class VideoSrcOverlay extends React.Component {
    constructor(props) {
        super(props)

        this.srcModes = {
            WEBPAGE: 'webpage',
            EMBEDDED: 'embedded-link'
        }

        this.state = {
            srcMode: this.srcModes.WEBPAGE
        }

        this.isActiveMode = this.isActiveMode.bind(this);
        this.setActiveMode = this.setActiveMode.bind(this);

        this.buildTabClasses = this.buildTabClasses.bind(this);
        this.buildTabBodyContents = this.buildTabBodyContents.bind(this);

        this.handleParseSourceStringAndLaunchVideo = this.handleParseSourceStringAndLaunchVideo.bind(this);
    }

    isActiveMode(mode) {
        return mode == this.state.srcMode;
    }

    setActiveMode(mode) {
        if (this.isActiveMode(mode)) return;
        
        this.setState({
            srcMode: mode
        });
    }

    buildTabClasses(mode) {
        let active = this.isActiveMode(mode) ? 'active': ''
        return 'nav-link ' + active;
    }

    buildTabBodyContents() {
        let textareaStyle = {resize:'none'};

        switch(this.state.srcMode) {
            case this.srcModes.WEBPAGE:
                return (
                    <form className="d-flex flex-column flex-grow-1">
                        <div className="form-group d-flex flex-column flex-grow-1">
                            <label>Webpage:</label>
                            <textarea className="form-control d-flex flex-column flex-grow-1" style={textareaStyle}></textarea>
                        </div>
                    </form>
                );
            case this.srcModes.EMBEDDED:
                return (
                    <form className="d-flex flex-column flex-grow-1">
                        <div className="form-group d-flex flex-column flex-grow-1">
                            <label>Embedded link:</label>
                            <textarea className="form-control d-flex flex-column flex-grow-1" style={textareaStyle}></textarea>
                        </div>
                    </form>
                );
        }
    }

    handleParseSourceStringAndLaunchVideo() {
        //TODO
    }

    render() {
        let tabContentBodyContents = this.buildTabBodyContents();

        return (
            <OverlayWrapperComponent>
                <div className="overlay-header">
                    <h5>Video Source</h5>
                    <button type="button" className="btn btn-dark" aria-label="Close" onClick={this.props.closeOverlayCb}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="overlay-body">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item" onClick={() => this.setActiveMode(this.srcModes.WEBPAGE)}>
                            <a className={this.buildTabClasses(this.srcModes.WEBPAGE)} href="#">Webpage</a>
                        </li>
                        <li className="nav-item" onClick={() => this.setActiveMode(this.srcModes.EMBEDDED)}>
                            <a className={this.buildTabClasses(this.srcModes.EMBEDDED)} href="#">Embedded</a>
                        </li>
                    </ul>              
                    {tabContentBodyContents}
                </div>
                <div className="overlay-footer">
                    <button type="button" className="btn btn-dark flex-fill">
                        <PlayCircleOutlineIcon fontSize="large" style={{paddingRight: '10px'}}/>
                        <span>Play Video</span>
                    </button>   
                </div>
            </OverlayWrapperComponent>
        );
    }
}

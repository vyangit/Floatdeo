/** 
* WindowSettingsModal.js
*
* Displays and edits the containing desktop window for
* the Floatdeo app
* 
*/

// Modules
import React from 'react';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import HistoryIcon from '@material-ui/icons/History';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// const {ipcRenderer} = require('electron');

// Locals
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';

const frameIds = {
    WINDOW: 'window',
    HISTORY: 'history'
}

export default class WindowSettingsOverlay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerFrameId: frameIds.WINDOW
        }

        this.getNavButtonClasses = this.getNavButtonClasses.bind(this);
        this.setDrawerFrameId = this.setDrawerFrameId.bind(this);
        this.renderDrawerFrame = this.renderDrawerFrame.bind(this);
    }

    getNavButtonClasses(frameId) {
        if (frameId == this.state.drawerFrameId) {
            return "btn btn-secondary";
        }

        return "settings-overlay-drawer-nav-link btn btn-link";
    }

    setDrawerFrameId(frameId) {
        this.setState({
            drawerFrameId: frameId
        });
    }

    renderDrawerFrame() {
        let frameId = this.state.drawerFrameId
        switch (frameId) {
            case frameIds.WINDOW:
                return <WindowSettingsDrawerFrame/>
            case frameIds.HISTORY:
                return <HistorySettingsDrawerFrame/>
        }
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>
                <div className="overlay-header d-flex align-items-center justify-content-between">
                    <h5>Settings</h5>
                    <button type="button" className="btn btn-dark" aria-label="Close" onClick={this.props.closeOverlayCb}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="overlay-body flex-row" >
                    <div className="settings-overlay-drawer">
                        <div className="d-flex flex-column">
                            <button className={this.getNavButtonClasses(frameIds.WINDOW)} onClick={() => {this.setDrawerFrameId(frameIds.WINDOW)}}>
                                <DesktopWindowsIcon/>
                                <span style={{paddingLeft: '10px'}}>Window</span>
                            </button>
                            <button className={this.getNavButtonClasses(frameIds.HISTORY)} onClick={() => {this.setDrawerFrameId(frameIds.HISTORY)}}>
                                <HistoryIcon/>
                                <span style={{paddingLeft: '10px'}}>History</span>
                            </button>
                        </div>
                    </div>
                    <div className="settings-overlay-drawer-container">
                       {this.renderDrawerFrame()}
                    </div>                    
                </div>
            </OverlayWrapperComponent>
        );
    }
}

class WindowSettingsDrawerFrame extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isFloating: false,
            isFrameless: false,
            opacityPercent: 100
        }

        this.handleFramelessToggle = this.handleFramelessToggle.bind(this);
        this.handleFloatingToggle = this.handleFloatingToggle.bind(this);
        this.handleWindowOpacityChange = this.handleWindowOpacityChange.bind(this);
    }

    handleFloatingToggle(isOn) {
        this.setState({
            isFloating: isOn
        });
    }

    handleFramelessToggle(isOn) {
        this.setState({
            isFrameless: isOn
        });
    }

    handleWindowOpacityChange(opacityValue) {
        this.setState({
            opacityPercent: opacityValue
        });
    }

    render() {
        return (
            <div className="d-flex flex-column flex-grow-1">
                <h2 className="settings-overlay-drawer-container-header">Window Settings</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Allow floating desktop window</p>
                    <Switch color="primary"  checked={this.state.isFloating} onChange={(_ , value) => this.handleFloatingToggle(value)}/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Use frameless desktop window</p>
                    <Switch color="primary" checked={this.state.isFrameless} onChange={(_ , value) => this.handleFramelessToggle(value)}/>    
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Opacity</p>                    
                    <div className="d-flex align-self-end w-50">
                        <p style={{paddingRight:'10px'}}>Min</p>
                        <Slider
                            value={this.state.opacityPercent}
                            min={25 /*so window doesn't disappear*/}
                            max={100}                            
                            onChange={(_, value) => this.handleWindowOpacityChange(value)}
                        />
                        <p style={{paddingLeft:'10px'}}>Max</p>
                    </div>
                </div>
            </div>
        );
    }
}

class HistorySettingsDrawerFrame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            historyKeepTimeRange: 'Today'
        }

        this.handleHistoryKeepTimeRangeChange = this.handleHistoryKeepTimeRangeChange.bind(this);
    }

    handleHistoryKeepTimeRangeChange(range) {
        this.setState({
            historyKeepTimeRange: range
        })
    }

    render() {
        return (
            <div className="d-flex flex-column flex-grow-1">
                <h2 className="settings-overlay-drawer-container-header">History Settings</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Keep history for:</p>
                    <FormControl variant="outlined">
                        <InputLabel id="settings-overlay-time-range-select-input-label">Date Range</InputLabel>
                        <Select
                        labelId="settings-overlay-time-range-select-input-label"
                        id="history-overlay-time-range-select-input"
                        value={this.state.historyKeepTimeRange}
                        label="Date Range"
                        onChange={(event) => this.handleHistoryKeepTimeRangeChange(event.target.value)} >
                        <MenuItem value={'Today'}>Today</MenuItem>
                        <MenuItem value={'Last Week'}>Last Week</MenuItem>
                        <MenuItem value={'Last Month'}>Last Month</MenuItem>
                        <MenuItem value={'Forever'}>Forever</MenuItem>
                        </Select>
                    </FormControl>  
                </div>
            </div>
        );
    }
}
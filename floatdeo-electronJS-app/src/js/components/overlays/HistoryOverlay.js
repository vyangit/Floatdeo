/** 
* HistoryModal.js
*
* Displays a history list of previously saved web video source
* ved web video sources
* 
*/

// Modules
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import QueueIcon from '@material-ui/icons/Queue';

// Locals
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';
import VideoDetails from 'Objects/VideoDetailsObject';

export default class HistoryOverlay extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            historyTimeRange: 'Today'
        }

        this.handleHistoryTimeRangeChange = this.handleHistoryTimeRangeChange.bind(this);
        this.deleteHistoryEntry = this.deleteHistoryEntry.bind(this);
        this.renderHistoryTable = this.renderHistoryTable.bind(this);
    }

    handleHistoryTimeRangeChange(range) {
        this.setState({
            historyTimeRange: range
        });
    }

    deleteHistoryEntry(id) {
        console.log(id);
    }
    
    renderHistoryTable() {
        let historyData = [
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            },
            {
                dateViewed: new Date(),
                inputMode: 'EMBEDDED',
                rawInputString: 'protocol://somethingsomething.something',
                deleteCb: '123'
            }
        ] // for testing

        let displayedData = new Array();

        for (let data of historyData) {
            let row = [];
            let inputBadgeClass = 'badge-secondary'

            // TODO: add switch for badge decision when weblinks are implemented

            // Create entries for the row
            row.push(<td>{data.dateViewed.toString()}</td>)
            row.push(<td><span className={'badge ' + inputBadgeClass}>{data.inputMode}</span></td>)
            row.push(<td>{data.rawInputString}</td>)
            row.push(<td>
                <div className="dropdown">
                    <button className="btn btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <MoreVertIcon/>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                            <QueueIcon/>
                            Queue
                        </a>
                        <a className="dropdown-item" href="#">
                            <PlaylistAddIcon/>
                            Add to playlist
                        </a>
                        <a className="dropdown-item" href="#">
                            <DeleteForeverIcon/>
                            Delete
                        </a>
                    </div>
                </div>
            </td>)

            // Add as data row
            displayedData.push(
                <tr>{row}</tr>
            );
        }

        return (
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">View Date</th>
                        <th scope="col">Input Mode</th>
                        <th scope="col">Input String</th>
                        <th scope="col">More</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>
                <div className="overlay-header d-flex align-items-center justify-content-between">
                    <h5>History</h5>
                    <button type="button" className="btn btn-dark" aria-label="Close" onClick={this.props.closeOverlayCb}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="overlay-body">
                    <div className="d-flex align-items-center">
                        <p style={{paddingRight:'10px'}}>Display history for:</p>
                        <FormControl variant="outlined">
                            <InputLabel id="history-overlay-time-range-select-input-label">Date Range</InputLabel>
                            <Select
                            labelId="history-overlay-time-range-select-input-label"
                            id="history-overlay-time-range-select-input"
                            value={this.state.historyTimeRange}
                            label="Date Range"
                            onChange={(event) => this.handleHistoryTimeRangeChange(event.target.value)} >
                            <MenuItem value={'Today'}>Today</MenuItem>
                            <MenuItem value={'Last Week'}>Last Week</MenuItem>
                            <MenuItem value={'Last Month'}>Last Month</MenuItem>
                            <MenuItem value={'All Time'}>All Time</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="container-fluid" style={{height:'80%', paddingTop:'10px'}}>
                        <div style={{height: '100%', overflowY:'scroll'}}>
                            {this.renderHistoryTable()}
                        </div>
                    </div>
                </div>
            </OverlayWrapperComponent>
        );
    }
}

/** 
* HistoryModal.js
*
* Displays a history list of previously saved web video source
* ved web video sources
* 
*/

// Modules
import React from 'react';

// Locals
import VideoDetails from 'Objects/VideoDetailsObject'


export default class HistoryModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var showClass = this.props.isShown ? 'show': '';

        return (
        <div className={"modal fade " + showClass} tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModalCb}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">f
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

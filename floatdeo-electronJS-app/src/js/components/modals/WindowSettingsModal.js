/** 
* WindowSettingsModal.js
*
* Displays and edits the containing desktop window for
* the Floatdeo app
* 
*/

// Modules
import React from 'react';

// Locals

export default class WindowSettingsModal extends React.Component {
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
                    <div className="modal-body">
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

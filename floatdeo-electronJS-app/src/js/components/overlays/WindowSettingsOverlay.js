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
import OverlayWrapperComponent from 'Components/OverlayWrapperComponent';

export default class WindowSettingsModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OverlayWrapperComponent isShown={this.props.isShown}>

            </OverlayWrapperComponent>
        );
    }
}

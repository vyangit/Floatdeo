/** 
* OptionsBarComponent.js
*
* Option bar for the floatdeo app
* 
*/

// Modules
import React from 'react';

// Locals
import OptionsBarButtonComponent from 'Components/OptionsBarButtonComponent'

export default class OptionsBarComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.buildButtons = this.buildButtons.bind(this);
    }

    buildButtons() {
        let options = this.props.options;
        var buttons = new Array(options.length);

        for (let i in options) {
            let option = options[i];
            var icon = option[0];
            var callback = option[1];
            var key = "options_bar_component_button_"+i.toString();

            buttons.push(<OptionsBarButtonComponent key={key} eventCb={callback} icon={icon}/>);
        }

        return buttons;
    }

    render() {
        let btns = this.buildButtons();

        return (
            <div className="options-bar d-flex justify-content-center align-items-center">
                {btns}
            </div>
        );
    }
}

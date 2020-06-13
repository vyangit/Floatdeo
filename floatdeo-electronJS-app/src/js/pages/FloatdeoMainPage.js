/**
 * FloatdeoMainPage.hs
 * 
 * Represents the main container/page for the floatdeo app
 */

// Node modules
const React = require('react');

// Locals


class FloatdeoMainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello floatdeo
            </div>
        );   
    }
}

ReactDOM.render(<FloatdeoMainPage/>, document.getElementById("root"));

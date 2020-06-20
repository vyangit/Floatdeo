/**
 * FloatdeoMainPage.hs
 * 
 * Represents the main container/page for the floatdeo app
 */

// Node modules
const React = require('react');

// Locals


export default class FloatdeoMainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("hello");
        return (
            <div>
                <p>Hello floatdeo</p>
            </div>
        );   
    }
}


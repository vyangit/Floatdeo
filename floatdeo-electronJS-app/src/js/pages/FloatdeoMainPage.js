/**
 * FloatdeoMainPage.hs
 * 
 * Represents the main container/page for the floatdeo app
 */

// Node modules
import React from 'react';

// Locals
import VideoContainerComponent from 'components/VideoContainerComponent.js'
import BottomOptionsBarComponent from 'components/BottomOptionsBarComponent.js'

export default class FloatdeoMainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <VideoContainerComponent/>
                <BottomOptionsBarComponent/>
            </div>
        );   
    }
}


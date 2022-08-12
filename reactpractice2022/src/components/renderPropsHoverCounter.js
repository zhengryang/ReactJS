import React, { Component } from 'react';

class RenderPropsHoverCounter extends Component {
    


    render() {
        const {count, updateCount} = this.props
        return (
            <div>
                 
            <h1 onClick={updateCount}> RenderPropsClickCounter {count} times</h1>
            </div>
        );
    }
}

export default RenderPropsHoverCounter;

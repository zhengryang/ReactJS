import React, { Component } from 'react';

class RenderPropsClickCounter extends Component {


    render() {
        const {count, updateCount} = this.props
        return (
            <div>
                RenderPropsClickCounter
                {count}
            <button onClick={updateCount}> add count</button>
            </div>
        );
    }
}

export default RenderPropsClickCounter;

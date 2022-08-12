import React, { Component } from 'react';

class RenderPropsHoverCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }

    
    updateCount =() => {
        this.setState(prevState => {
            return {count: prevState.count + 1};
        })
    }

    render() {
        return (
            <div>
                 
            <h1 onMouseOver={this.updateCount}> RenderPropsClickCounter
                {this.state.count}</h1>
            </div>
        );
    }
}

export default RenderPropsHoverCounter;

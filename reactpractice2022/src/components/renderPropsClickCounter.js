import React, { Component } from 'react';

class RenderPropsClickCounter extends Component {
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
                RenderPropsClickCounter
                {this.state.count}
            <button onClick={this.updateCount}> add count</button>
            </div>
        );
    }
}

export default RenderPropsClickCounter;

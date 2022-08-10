import React, { Component } from 'react';

class ClickCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this)
    }
    
    updateCount() {
        this.setState ( prevState => {
            return {count: prevState.count +1}
        })
    }

    render() {
        return (
            <div>
                click count {this.state.count}
                <button onClick={this.updateCount}>click</button>
            </div>
        );
    }
}

export default ClickCount;
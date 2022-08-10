import React, { Component } from 'react';

class HoverCount extends Component {


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
                 
                <h1 onMouseMove = {this.updateCount}>hover count: {this.state.count}</h1>
            </div>
        );
    }
}

export default HoverCount;
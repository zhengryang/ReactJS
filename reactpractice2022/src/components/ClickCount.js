import React, { Component } from 'react';
// first 'withCounter' is class name, 2nd is fileName
import withCounterHOC from './withCounter';

class ClickCount extends Component {

    

    render() {
        // receive data from props 
        const {count, updateCount} = this.props
        return (
            <div>
                {this.props.name }
                {/* we don't need to use keyword 'this' anymore here */}
                 click count {count}
                <button onClick={updateCount}>click</button>
            </div>
        );
    }
}

export default withCounterHOC(ClickCount, 5) ;
import React, { Component } from 'react';
import withCounterHOC from './withCounter';

class HoverCount extends Component {



    render() {
        // receive data from props 
        const {count, updateCount} = this.props
        return (
            <div>
                 {/* we don't need to use keyword 'this' anymore here */}
                <h1 onMouseMove = {updateCount}>hover count: {count}</h1>
            </div>
        );
    }
}

export default withCounterHOC(HoverCount) ;
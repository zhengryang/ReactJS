import React, { Component } from 'react';
import UpdatedComponent from './34_withCounter';

class ClickCount extends Component {

    

    render() {
        // receive data from props 
        const {count, updateCount} = this.props
        return (
            <div>
                {/* we don't need to use keyword 'this' anymore here */}
                click count {count}
                <button onClick={updateCount}>click</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCount) ;
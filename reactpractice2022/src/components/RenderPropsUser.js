import React, { Component } from 'react';

class RenderPropsUser extends Component {
    render() {
        return (
            <div>
                {this.props.nameOfRenderProps(false)}
            </div>
        );
    }
}

export default RenderPropsUser;

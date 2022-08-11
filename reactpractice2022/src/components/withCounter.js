import React from 'react';

const withCounterHOC = (OriginalComponent, incrementCount) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
            this.updateCount = this.updateCount.bind(this)
        }
        
        updateCount() {
            this.setState ( prevState => {
                return {count: prevState.count + incrementCount}
            })
        }

        render () {
            return <OriginalComponent 
            // pass field of 'count'
            count = {this.state.count}
            // pass method of updateCount()
            updateCount = {this.updateCount}
            {... this.props}
            ></OriginalComponent>
        }
    }
    return NewComponent
};

export default withCounterHOC

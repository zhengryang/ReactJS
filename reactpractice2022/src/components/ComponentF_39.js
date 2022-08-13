import React, { Component } from 'react';
import { UserConsumer } from './UserContext_39';

class ComponentF_39 extends Component {
    render() {
        
        return (
           
            <UserConsumer>
                { username => { 
                    return <div> hello {username}</div>
                }}
            </UserConsumer>



        );
    }
}

export default ComponentF_39;
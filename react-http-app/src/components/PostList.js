import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // initialize 'posts' to array
            posts: [], 
            errorMSG: ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response =>{
            console.log(Response)
            this.setState({posts: Response.data})
        })
        .catch(Error=>{
            console.log(Error)
            this.setState({errorMSG: 'Error: not data from server'})
        })
    }


    render() {
        const {posts, errorMSG} = this.state
        return (
            <div>
                post list
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {errorMSG ? <div>{errorMSG}</div>: null}
            </div>
        );
    }
}

export default PostList;
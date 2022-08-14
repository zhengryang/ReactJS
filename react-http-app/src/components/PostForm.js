import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {


    constructor(props) {
        super(props);
        this.state ={
            userID:'',
            title:'',
            body: ''
        }
    }

    changeHandler =(e)=>{
        this.setState ({[e.target.name]: e.target.value})
    }

    submitHandler =(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.get('https://jsonplaceholder.typicode.com/posts', this.state)
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
        
        const {userID, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userID" value ={userID} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value ={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value ={body} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
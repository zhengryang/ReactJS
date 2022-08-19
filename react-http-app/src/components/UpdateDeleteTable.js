import axios from 'axios';
import React, { Component } from 'react';
import jsonDAta from '../MOCK_DATA.json' 

class UpdateDeleteTable extends Component {



    postData(){


        // has to put this local json file in 'public folder' for this path to work
        const path1 = 'MOCK_DATA.json'
        axios.get(path1)
        .then(res => console.log(res.data))
        .catch(err => console.log(err) )
           
            
        
    }
    

    updateData(){

       const data = {

            "userId": 1,
            "id": 1,
            "title": "zheng come here",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }

        axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
        .then(Response =>{
            console.log(Response)
            // this.setState({posts: Response.data})
        })
       
    }

    deleteData (){
        const data = {
            "userId": 1,
            "id": 1,
            "title": "zheng come here",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }

        axios.delete('https://jsonplaceholder.typicode.com/posts/1', data)
        .then(Response =>{
            console.log(Response)
            // this.setState({posts: Response.data})
        })
    }


    render() {
        return (
            <div>
                <h1>Home page</h1>
                <p>welcome to update delete demo</p>
                <button onClick={this.postData}>submit</button>
                <button onClick={this.updateData}>update</button>
                <button onClick={this.deleteData}>delete</button>
            </div>
        );
    }
}

export default UpdateDeleteTable;
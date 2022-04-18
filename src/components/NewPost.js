import React,{useState} from'react';
import axios from 'axios';
const NewPost = ()=>{
    const[title, setTitle] = useState("")
    const[author, setAuthor] = useState("");

    const addpost = (author, title)=>{
        const post = {'title':title,'author':author};
        axios.post('http://localhost:8080/api/v1/posts',post)
        .then(res=>alert("post Added"))
        .catch(err=>console.log("error occured"))
    }

    return(
        <div>
            <h1>Add Post</h1>

            <h3>Title</h3>
            <input type='title' label='title' name='title' onChange={(e)=>setTitle(e.target.value)}></input>
            

            <h3>Author</h3>
            <input type='author' label='author' name='author' onChange={(e)=>setAuthor(e.target.value)}></input><br/>
            <br/>

            <button onClick={()=>addpost(author, title)}>Add Post</button>
        </div>
    )
}
export default NewPost;
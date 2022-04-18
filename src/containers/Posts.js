import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Post from '../components/Post';

const Posts = ()=>{
    const[posts, setPosts] = useState([])

    const fetchPost = ()=>{
        axios.get('http://localhost:8080/api/v1/posts')
        .then(res=>setPosts(res.data))
        .catch(err=>(console.log("can't")));
    }

    useEffect(()=>{fetchPost()},[])

    const postsList = posts.map(p=>{
        return <Post title={p.title}
                     author={p.author}/>
    });

    return(

        <div className='posts'>
            {postsList}
        </div>
    )
}
export default Posts;
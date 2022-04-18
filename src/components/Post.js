const Post = (props)=>{
    return(
        <div className='postContainer'>
            <h1>{props.title}</h1>
            <p>{props.author}</p><br/>

            <button>Follow</button>



        </div>
    )
}
export default Post;
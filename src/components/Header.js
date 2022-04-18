import React from "react";
import { Link } from 'react-router-dom'


const Header = ()=>{
    return(
        <header className='header'>
            
            <Link to='/posts'>Posts</Link>
            {"                                 "}
            <Link to ='/newPost'>New Post</Link>
            {"                                 "}
            <Link to = '/signin'>sign in</Link>

        </header>
    )
}
export default Header;
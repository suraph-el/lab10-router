import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from '../components/Header';
import NewPost from '../components/NewPost';
import SignIn from '../components/SignIn';
import Posts from './Posts';



const Dashboard = ()=>{
    return(
        <div>
            <Header/>

            <Routes>

                <Route path='/' element={<Posts/>}/>
                <Route path='posts' element={<Posts/>}/>               
                <Route path='newPost' element={<NewPost/>}/>
                <Route path='signin' element={<SignIn/>}/>
            
            </Routes>

        </div>
    )
} 
export default Dashboard;
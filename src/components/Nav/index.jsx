import React from 'react';
import '../../styles/global.css'

import { Link } from 'react-router-dom';


const Nav = () => {
    return  (
        <nav className=" flex justify-start bg-blue-900 px-10 font-mono text-right text-lg font-bold text-white border-b-2 border-black p-4" >
            <Link className=" m-2" to="/">Home</Link>
            <Link className=" m-2" to="/about">About</Link> 
            <Link className=" m-2" to="/projects">Projects</Link> 
            <Link className=" m-2" to="/blog">Blog</Link>
            <Link className=" m-2" to="/contact">Contact</Link>
        </nav>
    )
}

export { Nav }
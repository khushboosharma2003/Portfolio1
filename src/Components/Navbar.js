import React from 'react'
import me from './forml.jpg'
import Display from './Display';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <div className='contain fixed-top'>
            <div className="navbar ">
                <div className="head">
                 <img src={me} alt="" /> 
                 <span>
                    <Link to="/Portfolio_react">
                    Khubu </Link></span>
                </div>
                <div className="nav">
                    <Link to="/Portfolio_react">HOME</Link>
                    <Link to="/Skills">SKILLS</Link>
                    <Link to="/Project">PROJECTS</Link>
                    <Link className='btn-home' to="/Contact">CONTACT</Link>
                    <Link className='btn-gal' to="/Display">GALLERY</Link>
              

              
                </div>
            </div>
        </div>
    )
}
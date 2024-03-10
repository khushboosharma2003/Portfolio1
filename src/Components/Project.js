import React from 'react'
import me from './forml.jpg'
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
                    Khubu </span>
                </div>
                <div className="nav">
                    <Link className='btn-home' to="/">HOME</Link>
                    <Link to="/Skills">SKILLS</Link>
                    <Link to="/Project">PROJECTS</Link>
                    <Link to="/Contact">CONTACT</Link>
                    <Link className='btn-gal' to="/Gallery">GALLERY</Link>
              

              
                </div>
            </div>
        </div>
    )
}
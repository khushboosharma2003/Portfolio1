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
                    <h2> <img src={me} alt="" />Khubu</h2>
                </div>
                <div className="nav">
                    <Link to="/">HOME</Link>
                    <Link to="/Skills">SKILLS</Link>
                    <Link to="/Project">PROJECTS</Link>
                    <Link to="/Contact">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Navbar from './Navbar'
import About from './About'
import me from './me.jpg'
import Fotter from './Fotter'
export default function Home() {
    return (
        
        <div>
            {/* <Navbar /> */}
            <div className="home">
                <div className="left">
                    <img src={me} alt="" />

                </div>
                <div className="right">
                    <h3>Hello It's me..</h3>
                    <h1>KHUSHBuO</h1>
                    <h3>and I am a </h3>
                    <h2>DEVELOPER</h2>
                    <div className="link">
                        <a href="" className="link">
                        <i class='bx bxl-facebook'></i>
                            </a>
                            
                            <a href="" className="link">
                            <i class='bx bxl-instagram'></i>
                                </a>
                                <a href="" className="link">
                                <i class='bx bxl-linkedin'></i>
                                </a>
                    </div>
                    {/* <p>As a software engineering student, I approach every project with a deep sense of curiosity and a willing to learn new things. While designing small websites and developing small games I bring my creativity and attention to detail to every aspect of the project.I am always open to feedback and suggestions, and I work closely with team members to ensure that everyone's needs are met.</p> */}

            <button className='btn'>KNOW MORE</button>
                </div>
            </div>
            <About/>
            <Fotter/>
        </div>
    )
}

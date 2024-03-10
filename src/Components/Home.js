import React from 'react'
import Navbar from './Navbar'
import Project from './Project'
import Contact from './Contact'
import Skills from './Skills'
import Display from './Display'
import me from './m4.jpg'
import me2 from './forml.jpg'
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
                    <h1>KHUSHBOO</h1>
                    <h3>and I am a </h3>
                    <h2>DEVELOPER</h2>
                    <div className="link">
                        <a href="https://github.com/khushboosharma2003" className="link">
                        <i className='bx bxl-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/khushboo-sharma-438104216/" className="link">
                            <i className='bx bxl-linkedin'></i>
                            </a>
                           
                        <a href="https://www.facebook.com/profile.php?id=100059338912587" className="link">
                        <i className='bx bxl-facebook'></i>
                            </a>
                            
                            <a href="https://www.instagram.com/khushboo.sharma_26/" className="link">
                            <i className='bx bxl-instagram'></i>
                                </a>
                    </div>
                    {/* <p>As a software engineering student, I approach every project with a deep sense of curiosity and a willing to learn new things. While designing small websites and developing small games I bring my creativity and attention to detail to every aspect of the project.I am always open to feedback and suggestions, and I work closely with team members to ensure that everyone's needs are met.</p> */}
                
            <button className='btn btn-know'> <a href="#about">KNOW MORE</a> </button>
            <button className='btn'> <a href="https://kedar-guide.netlify.app"> DEMO WORK</a> </button>
                </div>
            </div>



            <main id="about">
                <h1> ABOUT ME </h1>
        
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3l-v3WE3HDeluMfpcx2pcWfUOELCXPYmWq-oujoiSCmaY5WT8Au2FFQ8g_WXm3z2SB5o&usqp=CAU" alt="" /> */}
                <div className="cont">
                  <div className='about'>
                    <p>
                    
                      I'm Khushboo, a BCA student living in Yamuna Nagar, Haryana.
                      As a software engineering student, I approach every project with a deep sense of curiosity and a willing to learn new things.
                      My technical skills include proficiency in Python, C, C++, HTML, CSS, JavaScript, and MySQL.
        <div class="subhead">Certificates</div>
                      I have actively pursued opportunities to enhance my skills, having completed courses in Python and JavaScript. Additionally, I attended a 3-day JS-React workshop organized by IIT, Kanpur in February 2023 and a 6-day C Programming workshop hosted by IIT, Kanpur in June 2022.
        <div class="subhead">Projects</div>
                      In terms of projects, I have developed a Password Manager in Python, ensuring the safety of passwords in a JSON file while creating strong and secure passwords. I have also created Python-based games, including a Snake Game involving controlling a growing snake and a Pong Game where two paddles hit a ball back and forth.
        
                    </p>
 
                  </div>
                  <div className='right'>
                    <img src={me2} alt="" />
                    <div class="resume">
                      <h2>Resume</h2>
                      <a className="btn" href="https://drive.google.com/file/d/1s9-BBpaLWK8qHosl2EbaXOdJf7SfcL7Q/view?usp=sharing">Click Here</a>
                    </div>
                  </div>
        
                </div>
                {/* <h3>for more view resume</h3> */}
              </main>





    
            <Skills/>
            <Project/>
            <Contact/>
            <Display/>
            <Fotter/>
        </div>
    )
}
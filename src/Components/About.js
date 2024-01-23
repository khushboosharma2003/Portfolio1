import React from 'react'

import me from './forml.jpg'
export default function About() {
  return (
    <>
    <main>
     <h1>ABOUT ME </h1>

    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3l-v3WE3HDeluMfpcx2pcWfUOELCXPYmWq-oujoiSCmaY5WT8Au2FFQ8g_WXm3z2SB5o&usqp=CAU" alt="" /> */}
     <div className="cont">
    <div className='about'>
      <p>As a software engineering student, I approach every project with a deep sense of curiosity and a willing to learn new things. While designing small websites and developing small games I bring my creativity and attention to detail to every aspect of the project.I am always open to feedback and suggestions, and I work closely with team members to ensure that everyone's needs are met.</p>
     

    </div>
    <div className='right'>
    <img src={me} alt="" />
    
    </div>
  
   </div>
   {/* <h3>for more view resume</h3> */}
   </main>
   </>
  )
}

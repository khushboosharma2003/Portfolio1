import React from 'react'
import Navbar from './Navbar'
import Fotter from './Fotter'
export default function Skills() {
  return (
    <div>
      <Navbar/>
      <div className="skill">
<h4 >TECHNICAL and PROFESSIONAL</h4>
<h1>SKILLS</h1>
<div className="container">
  <div className="sleft">
<h3>TECHNICAL SKILLS</h3>
<div className="skill-box">
  <h4>HTML</h4>
  <h5>90%</h5>
</div>
<div className="skill-box">
  <h4>CSS</h4>
  <h5>70%</h5>
</div>
<div className="skill-box">
  <h4>C</h4>
  <h5>80%</h5>
</div>
<div className="skill-box">
  <h4>C++</h4>
  <h5>80%</h5>
</div>
<div className="skill-box">
  <h4>JS</h4>
  <h5>70%</h5>
</div>
<div className="skill-box">
  <h4>REACT JS</h4>
  <h5>70%</h5>
</div>

  </div>
  <div className="sright">
<h3>PROFESSIONAL SKILLS</h3>
<div className="skill-box">
  <h4>Problem Solving</h4>
  <h5>90%</h5>
</div>
<div className="skill-box">
  <h4>Team Working</h4>
  <h5>90%</h5>
</div>
<div className="skill-box">
  <h4>Creativity</h4>
  <h5>80%</h5>
</div>
<div className="skill-box">
  <h4>Project Management</h4>
  <h5>80%</h5>
</div>
<div className="skill-box">
  <h4>Time Management</h4>
  <h5>70%</h5>
</div>
<div className="skill-box">
  <h4>Logical</h4>
  <h5>70%</h5>
</div>
  </div>
</div>
    </div>
    <Fotter/>
    </div>
  )
}

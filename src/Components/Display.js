import React from 'react'
import m1 from './me2.jpg'
import m2 from './me.jpg'
import m3 from './me22.jpg'
import m4 from './m23.jpg'
import m5 from './m4.jpg'
import m6 from './m5.jpg'
import m7 from './m6.jpg'
import m8 from './m7.jpg'
import m from './forml.jpg'

export default function Display() {
  return (
    <div>
        <div class="gallery">
    <h1>Gallery</h1>
    <div class="gall">
        <div class="card">
            <img src={m5} alt=""/>
        </div>
        <div class="card">
            <img src={m6} alt=""/>
        </div>
        <div class="card">
            <img src={m7} alt=""/>
        </div>
        <div class="card">
            <img src={m} alt=""/>
        </div>
        <div class="card">
            <img src={m4} alt=""/>
        </div>
        <div class="card">
        <img src={m1} alt=""/>
    </div>
    <div class="card">
        <img src={m2} alt=""/>
    </div>
    <div class="card">
        <img src={m3} alt=""/>
    </div>
  
 
</div>
</div> 
  </div>

  )
  }
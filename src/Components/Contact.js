import React, {useState} from 'react'
import Navbar from './Navbar'
import Fotter from './Fotter'

export default function Contact() {
  const[user, setuser]=useState(
    {
      name:"", email:"" , address: "" , number : "", msg:""
    }
  )
  let name , value;
  const handleChange=(e)=>{
    console.log("change");
    name=e.target.name;
    value=e.target.value;
    setuser({...user, [name]:value})
  }
  return (
    <div>
      <Navbar/>
<div className="box">
  <div className="left">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRef2RJEolGYwVjMDpqxL-Ps-o-S32g9UyAaQ&usqp=CAU" alt="" />
  <div className="skill-box">
  <h4> <i class='bx bxs-phone' ></i>phone number</h4>
  <h5>+91 8222872510</h5>
</div>
<div className="skill-box">
  <h4> <i class='bx bxl-gmail'></i>email</h4>
  <h5>khushboo.261203@gmail.com</h5>
</div>
<div className="skill-box">
  <h4>  <i class='bx bxl-linkedin'></i>linkedin</h4>
  <h5>khushboo-sharma-522219242</h5>
</div>
<div className="skill-box">
  
  <h4>  <i class='bx bxl-instagram'></i>Instagram</h4>
  <h5>khushboo.sharma_26</h5>
</div>
<div className="skill-box">
  <h4>  <i class='bx bxl-facebook link'></i>Facebook</h4>
  <h5>khushboo sharma</h5>
</div>
  </div>
      <div className="contact">
      <h5>Ask me a question</h5>
      {/* <h2>CONTACT ME</h2> */}
      <form action="">
        <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Your Name' required/> <br />
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Your Email' required /> <br />
        <input type="text" name='address'value={user.address}  onChange={handleChange} placeholder='Your Address' /> <br />
        <input type="text" name='number'value={user.number}  onChange={handleChange} placeholder='Your Number' /> <br />
        <textarea name='msg'value={user.msg}  onChange={handleChange} id="" cols="100" rows="5" placeholder='Write something' required></textarea> <br />
        <button className='btn'>SUBMIT</button>
      </form>
      
</div>
      </div>
      <Fotter/>
    </div>
  )
}

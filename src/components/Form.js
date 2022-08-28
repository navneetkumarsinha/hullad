import React, { Component } from 'react'
import './Form.css';
import { useState } from 'react';
import { useParams, useNavigate } from "react-router";
import aboutbackground from './aboutbackground.jpg';
import Navbar from './Navbar';
export default function Form() {

  var [user, setUser] = useState({
    name: "", email: "", phone: "", contribute: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = () => { //Once the form has been submitted, this method will post to backend
    const postURL = "mongodb+srv://navneet:navneet@cluster0.spwxdy4.mongodb.net/?retryWrites=true&w=majority"
    fetch(postURL, {
      method: 'POST',
      headers : {
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        contribute: user.contribute
      })
    })
    .then(()=>{
      alert('Form Submitted!');
    })
  }

  return (<>
    <body className='fullpage' style={{ backgroundImage: `url(${aboutbackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Navbar />
      <div className='formbody'>
        <div className="top">
          <h1 className="title">WELCOME TO THE FAMILY</h1>
          <p className="descrption">Fill this simple form and become part of our community</p>
        </div>
        <form className="registration-form">
          <div class="container">
            <fieldset className="intro">
              <label className="name-label" for="name">NAME: </label>
              <input className="name" type="text" name="name" id="name"
                value={user.name} onChange={handleInputs}
                required placeholder="Full Name" />
              <label className="email-label" for="email">EMAIL: </label>
              <input className="email" type="email" name="email" id="email"
                value={user.email} onChange={handleInputs}
                placeholder="eg. abc@something.com" required />
              <label className="number" for="tel">PHONE NUMBER: </label>
              <input className="number" type="tel" name="phone" id="phone"
                value={user.phone} onChange={handleInputs}
                placeholder="enter your mobile number" pattern="[0-9]{10}" required />
            </fieldset>
            <fieldset className="selections">

              <p className="learning-method">How do you want to contribute? </p>
              <label for="online">VOLUNTEER </label>
              <input type="radio" className="on" 
                value={user.contribute} onChange={handleInputs}
                name="contribute" id="contribute" /><br />
              <label for="offline">MEMBER </label>
              <input type="radio" className="off"
                value={user.contribute} onChange={handleInputs}
                name="contribute" id="contribute" />


            </fieldset>
          </div>
          <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </body>
  </>
  );
}
import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="contact-container">
      <div className="feedback">
        <div className="feed-card">
          <form action="" className='feed-form'>
            <h1>Feedback</h1>
            <p>Name</p>
            <input type="text" />
            <p>Email</p>
            <input type="email" />
            <p>Feedback</p>
            <input type="text" className='input-long'/>
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
      </div>
      <div className="line"></div>
      <div className="contact-form">
      <div className="feed-card contact-card">
          <h1>Contact Details</h1>
          <h3>Contact Number</h3>
          <p>+91 70452 86585</p>
          <h3>Email ID</h3>
          <a href='mailto:IT@elpee.co.in'>IT@elpee.co.in</a>
          <h3>Address</h3>
          <p>C/1518, ElpeeCo, ONEBKC, G-Block, Bandra Kurla Complex</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
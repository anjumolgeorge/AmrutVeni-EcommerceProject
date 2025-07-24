import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-wrap'>
      <Navbar/>
      <div className='contact-container'>
       {/* left column map */}
       <div className='map-section'>
          <iframe
            title="Sahyadri Bio Labs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.279167706283!2d76.03469947469646!3d10.583008789605036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee001b693079%3A0xa29e574b3ef6502c!2sSahyadri%20Bio%20Labs!5e0!3m2!1sen!2sin!4v1721800000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
       </div>
 {/* Right Column: Form and Info */}
        <div className="form-section">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Please Enter Email" required />
            <input type="tel" placeholder="Enter Phone Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <p><strong>Contact</strong></p>
            <p><a href="mailto:contact@amrutveni.com">📧 contact@amrutveni.com</a></p>

            <p><strong>Based in</strong></p>
            <p><strong>Head Office:</strong> 43/44 Shiv Shakti Estate, Marol Naka, Andheri Kurla Road, Andheri (E), Mumbai, Maharashtra, PIN – 400 059</p>

            <p><strong>Regional Office:</strong><br />
              SAHYADRI BIO LABS PVT. LTD.,<br />
              No.V/277, Pannissery,<br />
              Koonamoochi P O,<br />
              Thrissur, Kerala, PIN – 680504</p>
          </div>
        </div>     
      </div>
    </div>
  );
}

export default Contact;

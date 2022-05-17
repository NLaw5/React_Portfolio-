import './contact.scss'
import emailjs from '@emailjs/browser';
import apiKey from '../../emailkey.js';
import { useState } from "react";
//created typing 'rfc' from ES7 React/Reduce react snippets from marketplace

export default function Contact() {
  const [message, setMessage] = useState(false)
  const [errormessage, setErrorMessage] = useState(false)

  const handleSubmit = (e) => {
    // Prevent refreshing of page
    e.preventDefault();
    
    //Will have code here to send to Sendgrid 

    //Email
    console.log(e.target[0].value);
    //Actual Message of person sending
    console.log(e.target[1].value);

    emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log(e.target);
          setMessage(true);
          setErrorMessage(false);
      }, (error) => {
          console.log(error.text);
          console.log(e.target);
          setErrorMessage(true);
          setMessage(false);
      });
  }

  return (
    <div className='contact' id="contact">
        <div className="left">
          <img src="assets/shake.svg"></img>
        </div>
        <div className="right">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" name="email"/>
            <textarea placeholder="Message me here!" name="message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks for the message! I will reply as soon as I can!</span>}
            {errormessage && <span>Error has occured, please check that email is valid!</span>}
          </form>
        </div>
    </div>
  )
}

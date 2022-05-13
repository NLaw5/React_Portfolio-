import './contact.scss'
import { useState } from "react";
//created typing 'rfc' from ES7 React/Reduce react snippets from marketplace

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    // Prevent refreshing of page
    e.preventDefault();

    //Will have code here to send to Sendgrid 

    //Response Message to User
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
        <div className="left">
          <img src="assets/shake.svg"></img>
        </div>
        <div className="right">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message me here!"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks for the message! I will reply as soon as I can!</span>}
          </form>
        </div>
    </div>
  )
}

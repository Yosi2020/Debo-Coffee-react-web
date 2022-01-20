import React from 'react';
import './Contact.css'
import {Link} from "react-router-dom"

function Contact(setContactOpen) {
  return <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <Link to='/order'>
             <button
            onClick={() => {
              setContactOpen(false);
            }}
          >
            X
          </button>
          </Link>
          
        </div>
        <div className="title">
          <h1>Contact US</h1>
        </div>
        <div className="body">
          <h3>DeboEngineering CoFounder</h3>
          <p>Email: - boazict@gmail.com</p>
          <p>Mobile:- 0911086178</p>
        </div>
        <div className="footer">
          <Link to='/orders'>
            <button
                onClick={() => {
                setContactOpen(false);
                }}
                id="cancelBtn"
            >
                Cancel
            </button>
          </Link>
          <Link href = 'mailto:boazict@gmail.com' obfuscate ={true}>
          <button>Send Email</button></Link>
        </div>
      </div>
    </div>;
}

export default Contact;

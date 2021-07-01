import React from 'react'
import './signup.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import emailjs from 'emailjs-com';

export default function signup() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jbfyl7l', 'template_m7i2ujf', e.target, 'user_VYHq6LD11j55pFnsnL1gZ')
          .then((result) => {
              console.log(result.text);
              console.log(e.target)
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }




    return (
        <div className="signupBody">

            <section className="signupSection">

                <div className="formDiv">
                    <form onSubmit={sendEmail} className="form">

                        <label>Name</label><br/>
                        <input type="text" name="user_name" /><br/><br/>
                        <label>Email</label><br/>
                        <input type="email" name="user_email" /><br/><br/>
                        <label>Message</label><br/>
                        <textarea name="message" >Default Message In Here.. I want to join please send invoice</textarea><br/><br/>
                        <input type="submit" value="Send" />

                    </form>
                </div>


                <h1>DreamTrading</h1>
                <p>Text and stuff and forms and signups and pay please, thanks</p>
            </section>



        </div>
    )
}

import { React, useState } from 'react'
import './signup.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import emailjs from 'emailjs-com';
import Modal from '../modal/modal'
import Footer from '../footer/footer'
import NavbarSection from '../navbar/navbar'

export default function Signup() {

    const [show, setShow] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jbfyl7l', 'template_m7i2ujf', e.target, 'user_VYHq6LD11j55pFnsnL1gZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }




    return (
        <div className="signupBody">

            <NavbarSection />

            <section className="signupSection">

                <div className="formHeaderSwitch">

                    <div className="imageDiv" />

                    <div className="formDiv">
                        <h1 className="joinHeader">Join the Dream Team Today!</h1>
                        <form onSubmit={sendEmail} className="form">

                            <label>Name:</label><br />
                            <input type="text" name="user_name" /><br /><br />
                            <label>Email:</label><br />
                            <input type="email" name="user_email" /><br /><br />
                            <label>Message:</label><br />
                            <textarea placeholder="Enter your message" name="message" ></textarea><br /><br />
                            <input onClick={() => setShow(true)} type="submit" value="Send" className="signupButton" />


                        </form>
                    </div>
                </div>

                <hr></hr>
                <div className='nextContainer'>
                    <h1>What's Next?</h1>
                    <p>Once you submit your Name, Email, and Message we will reply back with an Invoice.</p>
                </div>
            </section>


            <Modal onClose={() => setShow(false)} show={show} />

            <Footer />

        </div>
    )
}

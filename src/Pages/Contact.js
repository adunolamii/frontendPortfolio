import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css"
import AnimatedPage from '../Components/AnimatedPage'


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2l7878z', 'template_127f0vt', form.current, {
        publicKey: 'a_RhGZpJhMCtKEGkD',
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log( error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div className='header-conctact'>
      <AnimatedPage>
      <section className='contact-main'>
      <nav className='header1'>
        <h1 className='touch'>Let's Get in Touch</h1>
      <img className='contact-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxbU2QC-7xYXg9tYqrlgH_YeHYlQ43MjPZQ&usqp=CAU'/>
      <h3 style={{color:"purple"}}>connect with us</h3>
     
      <section className='contact-icon'>

      </section>
      </nav>


      <nav  className='header2'>
      <section className='main-contact'>
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label className='name'>Name</label>
      <input type="text" name="user_name" className='input-name'/>
      <label className='email'>Email</label>
      <input type="email" name="user_email" className='input-email' />
      <label className='message'>Message</label>
      <textarea name="message" className='input-message' />
      <input type="submit" value="Send"  className='send'/>
    </form>
    
    </section>
    
      </nav>
      </section>
      </AnimatedPage>
  
    </div>
  );
};

export default Contact;
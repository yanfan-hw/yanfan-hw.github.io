import React, { useRef, useState } from 'react'
import './contact.css'

import { MdOutlineMail, MdOutlineMessage, MdLocalPhone } from 'react-icons/md'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.sendForm('service_7walspp', 'template_zm3ktr9', form.current, 'UIyTjo8L8zQVeagLc')
      .then((result) => {
        setIsLoading(false)
        console.log(result.text)
        alert('Success. Your message sended!')
      }, (error) => {
        setIsLoading(false)
        alert('Error. Your message didnot sended!')
        console.log(error.text)
      })
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yanfanhw@gmail.com</h5>
            <a href="mailto:yanfanhw@gmail.com">Send email</a>
          </article>
          <article className='contact__option'>
            <MdOutlineMessage className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Hung Hai Huynh</h5>
            <a href="https://m.me/hwng.huynhhai">Send a message</a>
          </article>
          <article className='contact__option'>
            <MdLocalPhone className='contact__option-icon' />
            <h4>Phone number</h4>
            <h5>+84.367.700.509</h5>
            <a href="tel:+84-367-700-509">Call me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} spellCheck="false">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message...' required />
          <button
            type="submit"
            className={isLoading ? 'btn btn-primary is-loading' : 'btn btn-primary'}
          >
          { isLoading && 
            <i className='spiner' />
          }
            <span className={isLoading ? 'txt' : ''}>{isLoading ? 'Sending' : 'Send message'}</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
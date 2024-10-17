import { useState } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser'
function Contact() {

  const sendCustomEmail = (details)=>{
    console.log(details)
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        to_email:details.to_email,
        subject: details.subject,
        message:details.message,
      }
    ).then((response)=>{
      alert('Submitted successful')
      setFormdata({
        to_email:"",
        subject:"",
        message:""
      })
      console.log(response)
    }).catch((error)=>console.log(error))
  }

  const [formdata,setFormdata] = useState({
    to_email:"",
    subject:"",
    message:""
  })

  const handleChange =(e)=>{
    const {name,value} = e.target
    setFormdata({...formdata,[name]:value})
  }
  const {to_email,subject,message} = formdata
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formdata)
    sendCustomEmail(formdata)
  }
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="subject"
            id="name"
            value={subject}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="to_email"
            id="email"
            value={to_email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

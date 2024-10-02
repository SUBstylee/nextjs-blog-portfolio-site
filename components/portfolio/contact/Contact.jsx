import styles from '../../../styles/Contact.module.scss';

import Toast from '../toast/Toast';

import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

//Email js
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent,setSent]=useState(false);
  const showNotification=()=>{
    setSent(true)
    setTimeout(()=>{
      setSent(false);
    },3000);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9aba8ff', 'template_0w7lfqs', form.current, form.current, {
        publicKey:'VxpFLmFDftKtm_X1n', });
    showNotification();
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className={`port__container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <AiOutlineMail className={styles['contact__option-icon']}/>
            <h4>Email</h4>
            <h5 className='break-words'>jjthrelfall@gmail.com</h5>
            <a href="mailto:jjthrelfall@gmail.com">Send an Email</a>
          </article>
          <article className={styles.contact__option}>
            <BsMessenger className={styles['contact__option-icon']}/>
            <h4>Messenger</h4>
            <h5>Jeremy Threlfall (阿民)</h5>
            <a href="https://m.me/substylee" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles['contact__option-icon']}/>
            <h4>WhatsApp</h4>
            <h5>+886 988 480 965</h5>
            <a href="https://api.whatsapp.com/send?phone=886988480965" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
        {/* End Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className={`${styles.button} btn btn-primary`}>Send Message</button>
          <Toast hidden={sent} message={`Message Sent!`}/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
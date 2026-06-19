import {useState, useRef} from 'react'
import Head from 'next/head'
import { withTranslation } from 'react-i18next'
import BackgroundVideo from '../components/backgroundVideo/backgroundVideo.js'
import styles from '../styles/Contact.module.scss'
import { motion } from "framer-motion"

function Contact({t}) {

  const [isCopied, setIsCopied] = useState(false)
  const form = useRef(null);

  const [contact, setContact] = useState({
    name: '',
    email: 'tximenea.films@gmail.com',
    subject: 'Tximenea web - Contact',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: '3f065880-436d-4cc4-a61d-7665881b34e1'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const[ status, setStatus ] = useState("")

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@tximeneafilms.com')
    setIsCopied(true)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    setStatus("submit")

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });

        setStatus("success")
        form.current.reset()
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });

      setStatus("error")
    }
  };

  return (
    <>
      <Head>
        <title>Tximenea Films || Contact</title>
        <meta name="description" content="Cuéntanos todo sobre tu proyecto en hello@tximeneafilms.com o llama al +34 623 17 29 68 || +34 617 24 00 23 "/>
      </Head>

      <motion.section className={styles.contact}
      initial={{x: -1000, opacity:0}}
      animate={{x: 0, opacity:1, overflowY: "scroll"}}
      transition={{
       x: { type: "spring", stiffness: 150, damping: 20 },
       opacity: { duration: 1 },
       overflowY :{delay:1}
      }}>
        <div className={styles.contact_description}>
          <div className="copy-wrapper">
            {isCopied ? <h1 onMouseLeave={() => setIsCopied(false)}>COPIED!</h1> : <h1 onClick={handleCopy}><span>{t("contact.hello")}</span>@TXIMENEAFILMS.COM!</h1>}
          </div>
          <h2 className="contact-hello-mobile">{t("contact.hello_mobile")}</h2><div className="mail_icon"></div><h1 className="contact-email-mobile">HELLO@TXIMENEAFILMS.COM</h1>
          <h3>{t("contact.call_to_action")}</h3>
          <form action='https://api.staticforms.xyz/submit' method='post' onSubmit={handleSubmit} className={styles.contact_form} ref={form}>
            <label htmlFor="email" >Email</label>
            <input placeholder={t("contact.email_placeholder")} id="email" type="email" name="email" className={styles.contact_form_field} onChange={handleChange}/>
            <label htmlFor="message">{t("contact.message_label")}</label>
            <textarea placeholder={t("contact.message_placeholder")} id="message" type="text" name="message" className={`${styles.contact_form_field} ${styles.contact_form_field_message}`} cols="10" rows="5" onChange={handleChange}/>
            <button type="submit">{t("contact.send")}</button>
          </form>
          {status === "submit" ? <p>{t("contact.submiting")}</p> : ""}
          {status === "success" ? <p>{t("contact.succeeded")}</p> : ""}
          {status === "error" ? <p>{t("contact.error")}</p> : ""}
        </div>
        <BackgroundVideo src="/static/videos/contact/background_video.m4v"/>
      </motion.section>
    </>
  )
}

export default withTranslation('common')(Contact)

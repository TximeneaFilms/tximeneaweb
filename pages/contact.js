import {useState} from 'react'
import Head from 'next/head'
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withTranslation } from '../i18n'
import BackgroundVideo from '../components/backgroundVideo/backgroundVideo.js'
import styles from '../styles/Contact.module.scss'
import { motion } from "framer-motion"

function Contact({t}) {

  const [isCopied, setIsCopied] = useState(false)

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

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
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
    }
  };
  
  return (
    <>
      <Head>
        <title>Tximenea Films || Contact</title>
        <description name="description" content="Cuéntanos todo sobre tu proyecto en hello@tximeneafilms.com o llama al +34 623 17 29 68 || +34 617 24 00 23 "/>
      </Head>

      <motion.section className={isBrowser ? styles.contact : styles.contact_mobile}
      initial={{x: -1000, opacity:0}} 
      animate={{x: 0, opacity:1, overflowY: "scroll"}}
      transition={{
       x: { type: "spring", stiffness: 150, damping: 20 },
       opacity: { duration: 1 },
       overflowY :{delay:1}
      }}>
        <div className={isBrowser ? styles.contact_description : styles.contact_mobile_description}> 
          <BrowserView>
            <CopyToClipboard text="hello@tximeneafilms.com" onCopy={() => { setIsCopied(true) }}>
              {isCopied ? <h1 onMouseLeave={() => setIsCopied(false)}>COPIED!</h1> : <h1><span>{t("contact.hello")}</span>@TXIMENEAFILMS.COM!</h1>}
            </CopyToClipboard>
          </BrowserView>
          <MobileView>
            <h2>{t("contact.hello_mobile")}</h2><div className="mail_icon"></div><h1>HELLO@TXIMENEAFILMS.COM</h1>
          </MobileView>
          <h3>{t("contact.call_to_action")}</h3>
          <form action='https://api.staticforms.xyz/submit' method='post' onSubmit={handleSubmit} className={styles.contact_form}>
            <label htmlFor="email" >Email</label>
            <input placeholder={t("contact.email_placeholder")} id="email" type="email" name="email" className={styles.contact_form_field} onChange={handleChange}/>
            <label htmlFor="message">{t("contact.message_label")}</label>
            <textarea placeholder={t("contact.message_placeholder")} id="message" type="text" name="message" className={`${styles.contact_form_field} ${styles.contact_form_field_message}`} cols="10" rows="5" onChange={handleChange}/>
            <button type="submit">{t("contact.send")}</button>
          </form>
        </div>
        <BackgroundVideo src="/static/videos/contact/background_video.m4v"/>
      </motion.section>
    </>
  )
}

export async function getStaticProps() {
  return {
  props:{
    namespacesRequired: ['common'],
  }
}
}

export default withTranslation('common')(Contact)



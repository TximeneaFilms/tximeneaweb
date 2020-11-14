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

  return (
    <>
      <Head>
        <title>Tximenea Films || Contact</title>
        <description name="description" content="Tell us about your project at hello@tximeneafilms.com of call the   +34 623 17 29 68 || +34 617 24 00 23 "/>
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
          <h4>{t("contact.adress_&_telephone")}</h4>
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



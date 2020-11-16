import Head from 'next/head'
import { isBrowser } from "react-device-detect";
import { withTranslation } from '../i18n'
import BackgroundVideo from '../components/backgroundVideo/backgroundVideo.js'
import styles from '../styles/About.module.scss'
import { motion } from "framer-motion"

function About({t}) {
  return (
    <>
      <Head>
        <title>Tximenea Films || About</title>
        <description name="description" content="Fundado por personas apasionadas por lo audiovisual, el sentido de la estética y el pensamiento de marca"/>
      </Head>

      <motion.section className={isBrowser ? styles.about : styles.about_mobile} 
      initial={{x: -1000, opacity:0}} 
      animate={{x: 0, opacity:1, overflowY: "scroll"}}
      transition={{
       x: { type: "spring", stiffness: 150, damping: 20 },
       opacity: { duration: 1 },
       overflowY :{delay:1}
     }}>
        <div className={styles.about_description}>
          <h1>{t("about.title")}</h1>
          <h3 dangerouslySetInnerHTML={{ __html: t("about.description")}}></h3>
        </div>
        <BackgroundVideo src="/static/videos/about/background_video.m4v"/>
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


export default withTranslation('common')(About)


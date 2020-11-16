import Head from 'next/head'
import Image from 'next/image'
import { BrowserView } from "react-device-detect";
import Link from 'next/link'
import { withTranslation } from '../../i18n'
import styles from '../../styles/Services.module.scss'
import Tilt from 'react-tilt'
import Particles from 'react-particles-js';
import config from "../../data/particles_config.json"
import services from "../../data/services_data.json"
import { motion } from "framer-motion"

function Services({t, particles_config, services_data, icons}) {
  return (
    <>
      <Head>
        <title>Tximenea Films || Services</title>
        <description name="description" content="At Tximenea Films we provide a great variety of services as videoclips, corporate videos, event coverage, photo sessions and more!"/>
      </Head>

      <motion.section className={styles.services}
      initial={{x: -1000, opacity:0, overflow:"hidden"}} 
      animate={{x: 0, opacity:1, overflowY: "scroll"}}
      transition={{
       x: { type: "spring", stiffness: 150, damping: 20 },
       opacity: { duration: 1 },
       overflowY :{delay:1}
     }}>
        <motion.h1 initial={{y: 50, opacity:0}} animate={{y: 0, opacity:1}} transition={{y: { delay:.5, duration: .4 },opacity: { duration: 1 }}}>{t("services.title")}</motion.h1>
        <div className={styles.services_list}>
          {services_data.list.map((service,index) => 
          <Tilt className="Tilt" options={{ max : 25 }} style={{perspective: 5}} key={index}>
            <Link href={"/services/" + service.title.toLocaleLowerCase().replace(' ', '_')}>
              <a className="Tilt-inner" style={{ display: "flex", flexDirection: "column" }}>
              <Image src={icons[service.icon]} alt={t("services.service_titles."+service.title)} style={{alignSelf:"center"}} width={150} height={200}/>
              <h5 style={{ fontSize: "20px", margin: "15px 0 5vh 0", textAlign:"center" }}>{t("services.service_titles."+service.title)}</h5>
              </a>
            </Link>
          </Tilt>)}
        </div>
        <BrowserView>
          <Particles params={particles_config} className={styles.services_background}/> 
        </BrowserView>
      </motion.section>
    </>
  )
}

export async function getStaticProps() {
  return {
  props:{
    particles_config:config,
    services_data:services,
    icons:{
      "corporate":"/static/icons/services/icon_corporate.png",
      "events":"/static/icons/services/icon_events.png",
      "music":"/static/icons/services/icon_music.png",
      "publi":"/static/icons/services/icon_publi.png",
      "rrss":"/static/icons/services/icon_rrss.png",
      "teaching":"/static/icons/services/icon_teaching.png",
    }
  }
}
}

export default withTranslation('common')(Services)
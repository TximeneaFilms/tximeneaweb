import Head from 'next/head'
import { withTranslation } from '../../i18n'
import config from "../../data/particles_config.json"
import services from "../../data/services_data.json"
import styles from '../../styles/Service.module.scss'
import { useRouter } from 'next/router'
import { isBrowser } from "react-device-detect";
import Image from 'next/image'
import Particles from 'react-particles-js';
import { motion } from "framer-motion"

function Service({t, particles_config, services_data, icons}) {

    const router = useRouter()

    const serviceName= router.query.service;
    const service = services_data.data[serviceName]

    return (
        <>
        <Head>
          <title>{"Tximenea Films | " + service.title.charAt(0) + service.title.toLowerCase().slice(1)}</title>
          <description name="description" content={service.description}/>
        </Head>

        <motion.section className={styles.service}
            initial={{x: 1000, opacity:0, overflow:"hidden"}} 
            animate={{x: 0, opacity:1, overflowY: "scroll"}}
            transition={{
            x: { type: "spring", stiffness: 150, damping: 20 },
            opacity: { duration: 1 },
            overflowY :{delay:1}
            }}>
            <div className={isBrowser ? styles.service_wrapper : styles.service_wrapper_mobile}>
                {isBrowser ? <div className={styles.service_backBtn} onClick={(e) => {e.preventDefault();router.back()}}>&larr; {t("services.go_back")}</div> : <div className="service_backBtn_mobile" onClick={(e) => {e.preventDefault();router.back()}}></div>}
                <img src={icons[service.icon]} alt={service.title} className={styles.icon_mobile} width={200} height={200}/>
                <h1>{t("services.data." + serviceName + ".title")}</h1>
                <p>{t("services.data." + serviceName + ".description")}</p>
                <div className={styles.service_wrapper_bulletpoints}>
                    <ul>
                    {service.bulletpoints.map((item,index) => <li key={index}>{t("services.data." + [serviceName] + ".bulletpoints." + item)}</li> )}
                    </ul>
                </div>
            </div>
            {isBrowser ? <Particles params={particles_config} className={styles.service_background}/> : ""}
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

  export async function getStaticPaths() {
    return {
        paths: [
            {params: { service: 'videoclips' } },
            {params: { service: 'corporate_video' } },
            {params: { service: 'advertisement' } },
            {params: { service: 'branded_content' } },
            {params: { service: 'events' } },
            {params: { service: 'formative_videos' } },
        ],
        fallback: false,
      }
  }


export default withTranslation('common')(Service)
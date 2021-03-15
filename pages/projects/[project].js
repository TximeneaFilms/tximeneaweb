import Head from 'next/head'
import { useRouter } from 'next/router'
import { withTranslation } from '../../i18n'
import { isBrowser } from "react-device-detect";
import Particles from 'react-particles-js';
import projects from "../../data/projects_data.json"
import config from "../../data/particles_config.json"
import styles from '../../styles/Project.module.scss'
import { motion } from "framer-motion"

function Project({t, particles_config, projects_data}) {

  const router = useRouter()

  const projectName= router.query.project;
  const project = projects_data.projects[projectName];

  return (
    <>
      <Head>
        <title>{"Tximenea Films || Projects " + project.title.charAt(0) + project.title.toLowerCase().slice(1)}</title>
        <description name="description" content={project.synopsis}/>
      </Head>

      <motion.section className={styles.project}
       initial={{x: -1000, opacity:0}} 
       animate={{x: 0, opacity:1, overflowY: "scroll"}}
       transition={{
        x: { duration: .65 },
        opacity: { duration: 1 },
        overflowY :{delay:1}
      }}>
        <div className={isBrowser ? styles.project_wrapper : styles.project_wrapper_mobile}>
        {isBrowser ?
        <motion.div className={styles.project_backBtn} onClick={(e) => {e.preventDefault();router.back()}}
        initial={{y: 50, opacity:0}} 
        animate={{y: 0, opacity:1}}
        transition={{
          y: { delay:1.5, duration: .3},
          opacity: { duration: 1.5 }
        }}
        >&larr; {t("projects.go_back")}</motion.div> 
        : <div className={styles.project_backBtn_mobile} onClick={(e) => {e.preventDefault();router.back()}}></div>}
          <motion.iframe title="Vimeo" className={styles.project_vimeo} src={project.video_link} frameBorder="0" allow="fullscreen" allowFullScreen
                  initial={{x: 350, opacity:0}} 
                  animate={{x: 0, opacity:1}}
                  transition={{
                    x: { delay:.5, duration: 1},
                  }}
          ></motion.iframe>
        </div>
        <motion.div className={styles.project_description}
          initial={{x: -250, opacity:0}} 
          animate={{x: 0, opacity:1}}
          transition={{
            x: { duration: 1},
            opacity: { duration: 1 }
          }}
        >
          <h1>{t("projects." + projectName +".title")}</h1>
          <div className={isBrowser ? "project_description_synopsis" : "project_description_synopsis_mobile"}>{t("projects." + projectName +".synopsis")}</div>
          <ul className={styles.project_description_cast}>
            <li><b>{t("projects.direction")}</b>{t("projects." + projectName + ".cast.direction")}</li>
            <li><b>{t("projects.script")}</b>{t("projects." + projectName + ".cast.script")}</li>
            <li><b>{t("projects.photography")}</b>{t("projects." + projectName + ".cast.photography")}</li>
            <li><b>{projectName === "referents" ? t("projects.participants") : t("projects.actors")}</b>{project.cast.actors.map((actor => actor.name + t("projects." + projectName + ".cast.actors." + actor.name)))}</li>
          </ul>
        </motion.div>
        {isBrowser ? <Particles params={particles_config} className={styles.project_background}/> : ""}
      </motion.section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props:{
        particles_config:config,
        projects_data:projects
      }
  }
}

export async function getStaticPaths() {
  return {
      paths: [
          {params: { project: '7_of_july' } },
          {params: { project: 'in_the_floka' } },
          {params: { project: 'toc' } },
          {params: { project: 'ivory_tusk' } },
          {params: { project: 'referents' } },
      ],
      fallback: false,
    }
}

export default withTranslation('common')(Project)
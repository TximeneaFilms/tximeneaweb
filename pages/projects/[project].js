import Head from 'next/head'
import { useRouter } from 'next/router'
import { withTranslation } from 'react-i18next'
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground.js'
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
        <meta name="description" content={project.synopsis}/>
      </Head>

      <motion.section className={styles.project}
       initial={{x: -1000, opacity:0}}
       animate={{x: 0, opacity:1, overflowY: "scroll"}}
       transition={{
        x: { duration: .65 },
        opacity: { duration: 1 },
        overflowY :{delay:1}
      }}>
        <div className={styles.project_wrapper}>
        <motion.div className={styles.project_backBtn} onClick={(e) => {e.preventDefault();router.back()}}
        initial={{y: 50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{
          y: { delay:1.5, duration: .3},
          opacity: { duration: 1.5 }
        }}
        >&larr; {t("projects.go_back")}</motion.div>
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
          <div>{t("projects." + projectName +".synopsis")}</div>
          <ul className={styles.project_description_cast}>
            <li><b>{t("projects.direction")}</b>{t("projects." + projectName + ".cast.direction")}</li>
            <li><b>{projectName === "referents" ? t("projects.edition") : t("projects.script")}</b>{t("projects." + projectName + ".cast.script")}</li>
            {projectName === "referents" && <li><b>{t("projects.production")}</b>{t("projects." + projectName + ".cast.production")}</li>}
            <li><b>{t("projects.photography")}</b>{t("projects." + projectName + ".cast.photography")}</li>
            <li><b>{projectName === "referents" ? t("projects.participants") : t("projects.actors")}</b>{project.cast.actors.map((actor => actor.name + t("projects." + projectName + ".cast.actors." + actor.name)))}</li>
          </ul>
        </motion.div>
        <div className="particles-desktop">
          <ParticlesBackground config={particles_config} className={styles.project_background}/>
        </div>
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

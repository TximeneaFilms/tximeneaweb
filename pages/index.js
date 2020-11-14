import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Projects.module.scss'
import BackgroundVideo from '../components/backgroundVideo/backgroundVideo.js'
import { withTranslation } from '../i18n'
import { motion } from "framer-motion"
import { BrowserView, MobileView, isBrowser} from 'react-device-detect'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

function Projects({t, pages}) {

  const [[currentPage, direction ], setPage ] = useState([0, 1]);
  const page = pages[currentPage]
  const pageTotal = pages.length - 1;

  const paginate = (newDirection) => {
    setPage([currentPage + newDirection, newDirection]);
  };

  return (
    <>
      <Head>
        <title>Tximenea Films || Projects</title>
        <description name="description" content="Tximenea Films is a production company set in Barcelona making commercials, short films and music videos since 2020."/>
      </Head>
  
      <section>
        <BrowserView viewClassName={styles.carrousel}>
          <div className={currentPage === 0 ? styles.carrousel_noClick : styles.carrousel_prev} onClick={() => paginate(-1)}/>
          <motion.h1 
          key={currentPage} 
          className={styles.carrousel_title} 
          initial={{scale:.75, y: 250, opacity:0}} 
          animate={{scale:1, y: 0, opacity:1}}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.65 }
          }}
          >{page.title}</motion.h1>
          <Link href={"/projects/" + page.link}>
              <motion.a  
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit={{scale:2}}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale:{ duration: 3 },
                }}>
                <Image src={"" + page.image} alt={"image"} className={styles.carrousel_image} width={750} height={450} quality={100} key={page.image}/>
              </motion.a>
          </Link>
          <div className={currentPage === pageTotal ? styles.carrousel_noClick : styles.carrousel_next} onClick={() => paginate(1)}/>   
        </BrowserView>   
        <MobileView viewClassName={styles.carrousel_mobile}>
          <Link href={"/projects/" + page.link}>
            <a></a>
          </Link>
          <motion.h1 
              key={currentPage} 
              className={styles.carrousel_mobile_title} 
              initial={{scale:.75, y: 250, opacity:0}} 
              animate={{scale:1, y: 0, opacity:1}}
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.65 }
              }}
              >{page.title === "" ? "COMING SOON" : page.title}</motion.h1>
          <div className={styles.carrousel_mobile_arrow} onClick={() => {currentPage === pageTotal ? setPage([0,1]) : paginate(1)}}></div>
        </MobileView>    
        <BackgroundVideo src={isBrowser ? page.video : page.video_mobile} key={isBrowser ? page.video : page.video_mobile}/>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props:{
      pages:[
        {
          title:"IN THE FLOKA",
          image:"/static/images/carrousel/floka.png",
          video:'/static/videos/carrousel/floka.mp4',
          video_mobile:'/static/videos/carrousel/mobile/floka.m4v',
          link:"in_the_floka"
        },
        {
          title:"IVORY TUSK",
          image:"/static/images/carrousel/ivory_tusk.png",
          video:'/static/videos/carrousel/ivory_tusk.m4v',
          video_mobile:'/static/videos/carrousel/mobile/ivory_tusk.m4v',
          link:"ivory_tusk"
        },
        {
          title:"7 DE JULIO",
          image:"/static/images/carrousel/7_of_july.png",
          video:'/static/videos/carrousel/7_of_july.m4v',
          video_mobile:'/static/videos/carrousel/mobile/7_of_july.m4v',
          link:"7_of_july"
        },
        {
          title:"TOC",
          image:"/static/images/carrousel/toc.png",
          video:'/static/videos/carrousel/toc.mp4',
          video_mobile:'/static/videos/carrousel/mobile/toc.m4v',
          link:"toc"
        },
        {
          title:"",
          image:"/static/images/carrousel/coming_soon.png",
          video:'/static/videos/carrousel/coming_soon.m4v',
          video_mobile:'/static/videos/carrousel/mobile/coming_soon.m4v',
          link:"/"
        },
      ]
    }
  }
}


export default withTranslation('common')(Projects)
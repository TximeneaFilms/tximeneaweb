import { useState } from 'react'
import styles from './carrousel.module.scss'
import BackgroundVideo from '../backgroundVideo/backgroundVideo.js'
import { motion } from "framer-motion"
import { p } from '../../lib/path'

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

function Carrousel({pages}) {

    const [[currentPage, direction ], setPage ] = useState([0, 1]);
    const page = pages[currentPage]
    const pageTotal = pages.length - 1;

    const paginate = (newDirection) => {
        setPage([currentPage + newDirection, newDirection]);
    };

  return (
    <>
        <div className={styles.carrousel_desktop}>
          <div className={currentPage === 0 ? styles.carrousel_desktop_noClick : styles.carrousel_desktop_prev} onClick={() => paginate(-1)} key={"prev_desktop"} />
          <motion.h1
            key={currentPage + "_desktop"}
            className={styles.carrousel_desktop_title}
            initial={{ scale: .75, y: 250, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.65 }
            }}
          >{page.title}</motion.h1>
          <div style={{zIndex:1}}>
            <motion.a
              href={p("/projects/" + page.link)}
              key={currentPage + "_desktop"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit={{ scale: 2 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 3 },
              }}>
              <img src={p(page.image)} alt={"image"} className={styles.carrousel_desktop_image} width={750} height={450} key={page.image} />
            </motion.a>
            <div className={styles.carrousel_desktop_pageDisplay}>
                  <div className={currentPage === 0 ? styles.carrousel_desktop_pageDisplay_arrow_noDisplay : `${styles.carrousel_desktop_pageDisplay_arrow} ${styles.carrousel_desktop_pageDisplay_arrow_back}`} onClick={() => paginate(-1)} ></div>
                  {pages.map((page, index) => <div className={ currentPage != index ? styles.carrousel_desktop_pageDisplay_item : `${styles.carrousel_desktop_pageDisplay_item} ${styles.carrousel_desktop_pageDisplay_item_active}` } key={ "page_" + index } onClick={() => setPage([index,1])} ></div>)}
                  <div className={currentPage === pageTotal ? styles.carrousel_desktop_pageDisplay_arrow_noDisplay : `${styles.carrousel_desktop_pageDisplay_arrow} ${styles.carrousel_desktop_pageDisplay_arrow_next}`} onClick={() => paginate(1)} ></div>
            </div>
          </div>
          <div className={currentPage === pageTotal ? styles.carrousel_desktop_noClick : styles.carrousel_desktop_next} onClick={() => paginate(1)} key={"next_desktop"} />
        </div>
        <BackgroundVideo src={page.video} key={page.video} />
        </>
  );
}

export default Carrousel;

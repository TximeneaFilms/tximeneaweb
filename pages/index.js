import Head from 'next/head'
import { withTranslation } from '../i18n'
import Carrousel from '../components/carrousel/carrousel.js'

function Projects({pages}) {
  return (
    <>
      <Head>
        <title>Tximenea Films</title>
        <description name="description" content="Tximenea Films is a production company set in Barcelona making commercials, short films and videoclips."/>
      </Head>
  
      <section>
        <Carrousel pages={pages}/>
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
import Head from 'next/head'
import { withTranslation } from 'react-i18next'
import Carrousel from '../components/carrousel/carrousel.js'

function Projects() {
  const pages = [
    {
      title:"REFERENTS",
      image:"/static/images/carrousel/referents.png",
      video:'/static/videos/carrousel/referents.mp4',
      video_mobile:'/static/videos/carrousel/mobile/referents.mp4',
      link:"referents"
    },
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

  return (
    <>
      <Head>
        <title>Tximenea Films</title>
        <meta name="description" content="Tximenea films es una productora audiovisual creativa de Barcelona, dedicada a hacer videoclips, anuncios, cortometrajes y vídeos corporativos"/>
      </Head>
      <section>
        <Carrousel pages={pages}/>
      </section>
    </>
  )
}

export default withTranslation('common')(Projects)

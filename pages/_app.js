import { useEffect } from 'react'
import '../styles/globals.scss'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'
import Navigation from '../components/navigation/navigation.js'
import Footer from '../components/footer/footer.js'
import SocialLinks from '../components/social_links/social_links.js'
import { AnimatePresence } from "framer-motion"
import NProgress from 'nprogress'
import Router from 'next/router';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeStart', () => {NProgress.start()})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function Tximenea({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <I18nextProvider i18n={i18n}>
      <main className="App">
        <Navigation/>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        <div className="social-desktop">
          <SocialLinks/>
        </div>
        <Footer/>
      </main>
    </I18nextProvider>
  )
}

export default Tximenea

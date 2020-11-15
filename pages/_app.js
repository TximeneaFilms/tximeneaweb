import { useEffect } from 'react'
import '../styles/globals.scss'
import { appWithTranslation } from '../i18n'
import Navigation from '../components/navigation/navigation.js'
import Footer from '../components/footer/footer.js'
import SocialLinks from '../components/social_links/social_links.js'
import { BrowserView } from 'react-device-detect'
import { AnimatePresence } from "framer-motion"
import NProgress from 'nprogress'
import Router from 'next/router';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { FormspreeProvider } from '@formspree/react';

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
      <main className="App">
        <Navigation/>
        <FormspreeProvider project="Tximenea web">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </FormspreeProvider>
        <BrowserView>
        <SocialLinks/>
        </BrowserView>
        <Footer/>
      </main>
  )

}


export default appWithTranslation(Tximenea)

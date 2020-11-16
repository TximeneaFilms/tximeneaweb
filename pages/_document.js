import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta http-equiv="Content-Security-Policy" content="default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';"/>
          <meta name="author" content="Tximenea Films"/>
          <link rel="base" href="https://tximeneafilms.com"/>
          <link rel="canonical" href="https://tximeneafilms.com"/>
          <meta name="robots" content="index/follow"/>
          <meta name="googlebot" content="index/follow"/>
          <meta name="theme-color" content="#101010"/>
          <meta name="msapplication-navbutton-color" content="#101010"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#101010"/>
          <meta itemprop="name" content="Tximenea Films"/>
          <meta itemprop="description" content="Tximenea Films is a production company set in Barcelona making commercials, short films and music videos since 2020."/>
          <meta itemprop="image" content="https://drive.google.com/file/d/1BoD6r4z3-fUD22-7mmbDdFltuE6wOOfA/view?usp=sharing"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Tximenea Films"/>
          <meta property="og:url" content="https://tximeneafilms.com"/>
          <meta property="og:site_name" content="Tximenea Films"/>
          <meta property="og:image" content="https://drive.google.com/file/d/1BoD6r4z3-fUD22-7mmbDdFltuE6wOOfA/view?usp=sharing"/>
          <meta property="og:description" content="Tximenea Films is a production company set in Barcelona making commercials, short films and music videos since 2020."/>
          <meta property="og:locale" content="en_US"/>
          <meta property="fb:app_id" content="Tximenea Films"/>
          <meta name="twitter:card" content="Tximenea Films is a production company set in Barcelona making commercials, short films and music videos since 2020."/>
          <meta name="twitter:title" content="Tximenea Film"/>
          <meta name="twitter:description" content="Tximenea Films is a production company set in Barcelona making commercials, short films and music videos since 2020."/>
          <meta name="twitter:creator" content="Tximenea Films"/>
          <meta name="twitter:image" content="https://tximeneafilms.com"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static//favicons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static//favicons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static//favicons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static//favicons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static//favicons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static//favicons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static//favicons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static//favicons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/static//favicons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static//favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static//favicons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static//favicons/favicon-16x16.png"/>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

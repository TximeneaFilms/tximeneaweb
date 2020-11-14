import BackgroundVideo from '../components/backgroundVideo/backgroundVideo.js'

export default function Custom404() {
  return (
      <>
      <section>
        <div className="notFound">
          <h1>404</h1>
          <h3>Something has gone wrong... don't worry, someone will be fired for this!</h3>
        </div>
        <BackgroundVideo src="/static/videos/notFound/backgroundVideo.mp4"/>
      </section>
    </>
  )
}

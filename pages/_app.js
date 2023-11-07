import '@styles/globals.css'
import { Analytics } from '@components/Partials/Analytics'

function Application({ Component, pageProps }) {
  return (
    <>
      <Analytics/>
      <Component {...pageProps} />
    </>
  )
}

export default Application

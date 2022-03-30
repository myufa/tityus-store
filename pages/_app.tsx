import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import Header from 'components/common/header'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className='layout'>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

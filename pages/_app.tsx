import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import Header from 'components/common/header'
import useStore from 'store'
import styled, { css } from 'styled-components'
import ProductSearch from 'components/common/product-search'
import FooterBar from 'components/common/footer-bar'

type AppContainerProps = { hide: boolean }
const AppContainer = styled.div<AppContainerProps>`
  /* transition: opacity 0.5s ease-in, height 0.3s linear 0.6s;
  ${({ hide }) => hide ? css`
      opacity: 0;
      height: 0;
      overflow: hidden;
  ` : css`
      opacity: 1;
      height: 100%;
  `} */
`

const FooterPad = styled.div`
  padding-bottom: 90px;
`

function MyApp({ Component, pageProps }: AppProps) {
  const menuOpen = useStore(state => state.menuOpen)
  const showFooter = useStore(state => state.showFooter)
  return(
    <div className='layout'>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Header />
      <AppContainer hide={menuOpen}>
        <Component {...pageProps} />
      </AppContainer>
      <FooterBar />
      {showFooter && <FooterPad />}
    </div>
  )
}

export default MyApp

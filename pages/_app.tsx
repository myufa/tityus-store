import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'

import Header from 'components/common/header'
import useStore from 'store'
import styled, { css } from 'styled-components'
import ProductSearch from 'components/common/product-search'
import FooterBar from 'components/common/footer-bar'
import Menu from 'components/common/menu'
import { useEffect } from 'react'
import Flex from 'components/common/flex'
import useOutsideClick from 'components/common/outside-click'


const Mask = styled(Flex)`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 70px;
    overflow: hidden;
    background: #A7A7A7;
    opacity: 0.6;
    transition: opacity 0.5s;
`

const SearchContainer = styled(Flex)`
  position: absolute;
  top: 100px;
  z-index: 5;
`

type AppContainerProps = { hide?: boolean }
const AppContainer = styled.div<AppContainerProps>`
  transition: opacity 0.5s ease-in, height 0.3s linear 0.6s;
  min-height: 100vh;
  ${({ hide }) => hide ? css`
      height: ${window.innerHeight - 140}px;
      overflow: hidden;
  ` : css`
      opacity: 1;
      height: 100%;
  `}
`

const FooterPad = styled.div`
  padding-bottom: 90px;
`

function MyApp({ Component, pageProps }: AppProps) {
  const menuOpen = useStore(state => state.menuOpen)
  const showSearch = useStore(state => state.showSearch)
  const toggleSearch = useStore(state => state.toggleSearch)

  const showFooter = useStore(state => state.showFooter)
  const hideMenu = useStore(state => state.hideMenu)
  const router = useRouter()
  const { ref: SearchRef } = useOutsideClick<HTMLDivElement>(() => toggleSearch(false))

  useEffect(() => {
    hideMenu()
  }, [router.pathname])
  return(
    <div className='layout'>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Header />
      {showSearch && (
        <>
          <Mask />
          <SearchContainer center fullWidth ref={SearchRef}>
            <ProductSearch />
          </SearchContainer>
        </>
      )}
      <AppContainer hide={menuOpen}>
        <Component {...pageProps} />
      </AppContainer>
      <FooterBar />
      <Menu />
      {showFooter && <FooterPad />}
    </div>
  )
}

export default MyApp

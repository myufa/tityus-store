import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../components/common/flex'

import useStore from '../store'
import SellNowSection from 'components/home/sell-now-section'
import Footer from 'components/common/footer'



const Container = styled.div`
`


const HomePage: NextPage = () => {
    return (
        <Container>
            <SellNowSection />
            <Footer />
        </Container>
    )
}

export default HomePage

import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../components/common/flex'

import useStore from '../store'
import SellNowSection from 'components/home/sell-now-section'
import Footer from 'components/common/footer'
import ServiceQualitySection from 'components/home/service-quality-section'
import OurProductsSection from 'components/home/our-products-section'
import OurVisionSection from 'components/home/our-vision-section'
import CarouselSection from 'components/home/carousel-section'
import FindStoreSection from 'components/home/find-store-section'



const Container = styled.div`
`


const HomePage: NextPage = () => {
    return (
        <Container>
            <SellNowSection />
            <ServiceQualitySection />
            <OurProductsSection />
            <OurVisionSection />
            <CarouselSection />
            <FindStoreSection />
            <Footer />
        </Container>
    )
}

export default HomePage

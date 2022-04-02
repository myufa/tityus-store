import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../components/common/flex'

import useStore from '../store'
import ServicesSection from 'components/home/services-section'
import OfferingsSection from 'components/home/offerings-section'
import ProductSearch from 'components/common/product-search'


const Container = styled.div`
    padding: 0 22px;
    overflow: auto;
`

const Header = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: black;
`

const SubHeader = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    color: black;
`

const SeeAll = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    cursor: pointer;
`


const HomePage: NextPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter = useStore(state => state.useFooter)
    useHeader()
    useFooter()

    return (
        <Container>
            <Header>Less waiting.<br />More living.</Header>
            <ProductSearch />
            <ServicesSection />
            <Flex alignItems='center' justifyContent='space-between'>
                <SubHeader>Categories</SubHeader>
                <SeeAll>See All</SeeAll>
            </Flex>
            <OfferingsSection />
        </Container>
    )
}

export default HomePage

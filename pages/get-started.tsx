import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../components/common/flex'

import useStore from 'store'
import SizedImage from 'components/common/sized-image'

const Container = styled(Flex)`
    color: #FAFAFC;
    background: #BD4040;
    width: 100%;
    height: 100vh;
    padding: 50px 40px 80px 40px;
`

const Header = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
`

const Paragraph = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
`

const GetStartedButton = styled.button`
    width: 280px;
    height: 66px;
    padding: 0 30px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border: none;
    border-radius: 20px;
    color: black;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
        color: #BD4040;
    }
`

const paragraphText = `
    At TITYUS,  we priortise our clients’ safety and convenience.
    Our company works as a liaison between you, vendors and transplant centers.
    We pride ourselves in eradicating the delicate and often tedious process of
    looking for willing living vendors.
    For those in need of an organ or tissue transplant, TITYUS offers a meticulous selection of
    products ready to be shipped at any time or picked up at our stores nationwide.
`

const GetStartedPage: NextPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter = useStore(state => state.useFooter)

    useHeader(false)
    useFooter(false)

    return (
        <Container column justifyContent='space-between'>
            <Flex column>
                <Header>
                    Your organ<br />
                    and tissue<br />
                    transplant needs<br />
                    all in one place.
                </Header>
                <Paragraph>{paragraphText}</Paragraph>
            </Flex>
            <Link href='/home' passHref>
                <GetStartedButton>
                    Get Started
                    <SizedImage src='/right-arrow.svg' alt='go' width={22} height={22}/>
                    </GetStartedButton>
            </Link>
        </Container>
    )
}

export default GetStartedPage

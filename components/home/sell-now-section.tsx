import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import Button from 'components/common/button'

import Logo from '../../public/home/Logo.png'
import SizedImage from 'components/common/sized-image'

const Container = styled(Flex)`
    padding: 0 0 30px 0;
`

const ContentContainer = styled(Flex)`
    background-color: #F8F8F8;
    border-radius: 16px;
`

const SellNowButton = styled(Button)`
`

const SellNowSection = () => {
    return (
        <Container height={400}>
            <ContentContainer column height={350} fullWidth>
                <Flex>
                    <Flex widthPct={40} alignItems='center'>
                        <SizedImage src='/kidney-in-hand.svg' alt='Kidney In Hand' width={129} height={120}/>
                    </Flex>
                    <Flex column widthPct={60}>
                        <h1>Less waiting and more living.</h1>
                        <h2>Your organ and tissue transplant needs all in one place.</h2>
                    </Flex>
                </Flex>
                <Flex height={60} center>
                    <SellNowButton width={140} height={45}>Sell Now</SellNowButton>
                </Flex>
            </ContentContainer>
        </Container>
    )
}

export default SellNowSection

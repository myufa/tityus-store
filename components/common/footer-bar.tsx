import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import useStore from 'store'
import Flex from 'components/common/flex'
import NoSSR from 'components/common/no-ssr'
import SizedImage from './sized-image'

import ScanIcon from 'public/home/Active.png'

const Container = styled(Flex)`
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 15px;
`

const Bar = styled(Flex)`
    position: relative;
    border-radius: 80px;
    background: white;
    height: 70px;
    width: 90%;
    filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.05));
`

const Badge = styled(Flex)`
    position: absolute;
    width: 18px;
    height: 19px;
    bottom: -8px;
    right: -8px;
    border-radius: 1000px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px;
    background: #BD4040;
    color: white;
    opacity: 0.94;
`

const BadgedFlex = styled(Flex)`
    position: relative;
`


const FooterBar = () => {
    const showFooter = useStore(state => state.showFooter)

    const catalogue = useStore(state => state.catalogue)

    const amountLiked = [...catalogue.entries()].filter(([_, { liked }]) => liked).length

    const amounInBag = [...catalogue.entries()].filter(([_, { inBag }]) => inBag).length

    if (!showFooter) return null

    return (
        <Container center>
            <Bar alignItems='center' justifyContent='space-between' paddingLeft={30} paddingRight={30}>
                <Link href='/home' passHref>
                    <Flex>
                        <SizedImage src='/Home.svg' alt='Home' width={18} height={20}/>
                    </Flex>
                </Link>
                <Link href='/liked' passHref>
                    <BadgedFlex>
                        <SizedImage src='/Liked.svg' alt='Liked' width={20} height={20}/>
                        {amountLiked && <Badge center>{amountLiked}</Badge>}
                    </BadgedFlex>
                </Link>
                <Link href='/bag' passHref>
                    <BadgedFlex>
                        <SizedImage src='/Bag.svg' alt='Bag' width={20} height={20}/>
                        {amounInBag && <Badge center>{amounInBag}</Badge>}
                    </BadgedFlex>
                </Link>
                <Link href='/scan' passHref>
                    <Flex>
                        <SizedImage src={ScanIcon} alt='Liked' width={100} height={40}/>
                    </Flex>
                </Link>

            </Bar>
        </Container>
    )
}

export default dynamic(() => Promise.resolve(FooterBar), {ssr: false})

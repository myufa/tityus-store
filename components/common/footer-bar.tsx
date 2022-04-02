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



const FooterBar = () => {
    const showFooter = useStore(state => state.showFooter)

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
                    <Flex>
                        <SizedImage src='/Liked.svg' alt='Liked' width={20} height={20}/>
                    </Flex>
                </Link>
                <Link href='/bag' passHref>
                    <Flex>
                        <SizedImage src='/Bag.svg' alt='Bag' width={20} height={20}/>
                    </Flex>
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

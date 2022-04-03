import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import useStore from 'store'
import Flex from 'components/common/flex'
import NoSSR from 'components/common/no-ssr'
import SizedImage from './sized-image'

import ScanIcon from 'public/home/Active.png'
import { useRouter } from 'next/router'

type BadgedSvgProps = { selected: boolean }
const BadgedSvg = styled.svg<BadgedSvgProps>`
    ${({ selected }) => selected && css`
        color: #BD4040;
    `}
`

const LikedIcon = ({ selected }: BadgedSvgProps) => {
    return (
        <BadgedSvg selected={selected} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3386 1.88306C12.4445 0.744368 13.9229 0.0768957 15.4792 0.00624653L15.7546 0C17.411 0 18.9995 0.677387 20.1702 1.88273C21.3418 3.08783 22 4.72265 22 6.42732C22 8.132 21.3418 9.76682 20.1704 10.9718L11.679 19.7105C11.3038 20.0965 10.6956 20.0965 10.3205 19.7105L1.8291 10.9718C-0.609699 8.46194 -0.609699 4.39271 1.8291 1.88289C4.2679 -0.626926 8.22197 -0.626926 10.6608 1.88289L10.9995 2.23114L11.3386 1.88306ZM18.8118 3.28074C18.0011 2.44604 16.9013 1.97708 15.7546 1.97708C14.6078 1.97708 13.508 2.44604 12.6972 3.2809L11.679 4.32876C11.3038 4.71481 10.6956 4.71481 10.3205 4.32876L9.30232 3.2809C7.61377 1.54318 4.87609 1.54318 3.18755 3.2809C1.499 5.01862 1.499 7.83603 3.18755 9.57375L10.9995 17.6128L18.8121 9.57358C19.5691 8.7949 20.0165 7.75707 20.0728 6.66264L20.0789 6.42732C20.0789 5.24716 19.6232 4.11537 18.8118 3.28074Z" fill={selected ? '#BD4040' : "#767474"}/>
        </BadgedSvg>
    )
}

const BaggedIcon = ({ selected }: BadgedSvgProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 2H17C17.5523 2 18 2.44771 18 3V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V3C2 2.44772 2.44771 2 3 2ZM0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z" fill={selected ? '#BD4040' : "#767474"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 10C7.23858 10 5 7.31371 5 4H7C7 6.56606 8.6691 8 10 8C11.3309 8 13 6.56606 13 4H15C15 7.31371 12.7614 10 10 10Z" fill={selected ? '#BD4040' : "#757474"}/>
</svg>

    )
}

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

    const router = useRouter()

    const isLiked = router.pathname.includes('liked')
    const isBag = router.pathname.includes('bag')

    console.log('router.pathname', router.pathname, isLiked, isBag)

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
                    <BadgedFlex width={30} height={31} center>
                        <LikedIcon selected={isLiked}/>
                        {amountLiked > 0 && <Badge center>{amountLiked}</Badge>}
                    </BadgedFlex>
                </Link>
                <Link href='/bag' passHref>
                    <BadgedFlex width={30} height={31} center>
                        <BaggedIcon selected={isBag}/>
                        {amounInBag > 0 && <Badge center>{amounInBag}</Badge>}
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

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

type MaskProps = { active: boolean }
const Mask = styled(Flex)<MaskProps>`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 70px;
    overflow: hidden;
    background: #A7A7A7;
    opacity: ${({ active }) => active ? 0.6 : 0};
    transition: opacity 0.5s;
`

type BarContainerProps = { active: boolean }
const BarContainer = styled(Flex)<BarContainerProps>`
    position: fixed;
    bottom: 0;
    opacity: ${({ active }) => active ? 1 : 0};
    transition: opacity 0.5s;
`

const Bar = styled(Flex)`
    border-radius: 80px;
    background: white;
    width: 90%;
    filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.05));
    border-radius: 20px 20px 0px 0px;
`

const MenuOption = styled(Flex)`
    border-bottom: 1px solid #BFC9DA;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;
`



const Menu = () => {
    const menuOpen = useStore(state => state.menuOpen)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (!menuOpen) return
        setActive(true)
        return () => {
            setActive(false)
        }
    }, [menuOpen])

    if (!menuOpen) return null

    return (
        <>
            <Mask center active={active}>
            </Mask>
            <BarContainer column  alignItems='center' widthPct={100} active={active}>
                <Bar widthPct={90} height={170} column>
                    <Link href='/stores' passHref>
                        <MenuOption height={85} center>
                            <SizedImage src='/icon-store.svg' alt='Store' width={26} height={23}/>
                            &nbsp;
                            Store Locator
                        </MenuOption>
                    </Link>
                    <Link href='/contact' passHref>
                        <MenuOption height={85} center>
                            <SizedImage src='/icon-contact.svg' alt='Store' width={24} height={24}/>
                            &nbsp;
                            Get in Touch
                        </MenuOption>
                    </Link>
                </Bar>
            </BarContainer>
        </>
    )
}

export default dynamic(() => Promise.resolve(Menu), {ssr: false})

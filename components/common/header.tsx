import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Logo from 'public/home/Logo.png'
import useStore from 'store'
import dynamic from 'next/dynamic'

const Container = styled(Flex)`
    padding: 20px 22px 0 22px;
`

type MenuButtonContainerProps = { open?: boolean }
const MenuButtonContainer = styled(Flex)<MenuButtonContainerProps>`
    ${({open}) => open && 'transform: rotate(90deg)'};
    transition: transform 0.45s ease-in;
`

const Header = () => {
    const showHeader = useStore(state => state.showHeader)
    const menuOpen = useStore(state => state.menuOpen)
    const toggleMenu = useStore(state => state.toggleMenu)

    if (!showHeader) return null

    return (
        <Container
            height={60}
            alignItems='center'
            justifyContent='space-between'>
            <Flex
                onClick={() => toggleMenu()}
                alignItems='center'>
                <MenuButtonContainer open={menuOpen}>
                    <SizedImage src='/Menu.svg' alt='Menu' width={45} height={45} scale={0.8}/>
                </MenuButtonContainer>
            </Flex>
            <Flex
                column
                center
                pointer>
                <Link href='/home' passHref>
                    <Flex>
                        <SizedImage src={Logo} alt='Logo' width={150} height={49} scale={0.8}/>
                    </Flex>
                </Link>
            </Flex>
        </Container>
    )
}

export default dynamic(() => Promise.resolve(Header), {ssr: false})

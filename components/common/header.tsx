import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Logo from 'public/home/Logo.png'
import useStore from 'store'

const Container = styled(Flex)`
`

type MenuButtonContainerProps = { open?: boolean }
const MenuButtonContainer = styled(Flex)<MenuButtonContainerProps>`
    ${({open}) => open && 'transform: rotate(90deg)'};
    transition: transform 0.45s ease-in;
`

const Header = () => {
    const menuOpen = useStore(state => state.menuOpen)
    const toggleMenu = useStore(state => state.toggleMenu)


    return (
        <Container column>
            <Flex
                height={90}
                alignItems='center'
                justifyContent='space-between'>
                <Flex
                    onClick={() => toggleMenu()}
                    widthPct={20}
                    alignItems='center'>
                    <MenuButtonContainer open={menuOpen}>
                        <SizedImage src='/menu-icon.svg' alt='Menu' width={40} height={30} scale={0.8}/>
                    </MenuButtonContainer>
                </Flex>
                <Flex
                    column
                    widthPct={60}
                    center
                    pointer>
                    <Link href='/home' passHref>
                        <SizedImage src={Logo} alt='Logo' width={150} height={49} scale={0.8}/>
                    </Link>
                </Flex>
                <Flex
                    widthPct={20}
                    alignItems='center'
                    justifyContent='flex-end'>
                    <SizedImage src='/cart-icon.svg' alt='Cart' width={30} height={30.5} scale={0.8}/>
                    &nbsp;1
                    {/* <Flex><SizedImage src='/liked-icon.svg' alt='Liked' width={30} height={30} /></Flex> */}
                </Flex>
            </Flex>
            <Flex>

            </Flex>
        </Container>
    )
}

export default Header

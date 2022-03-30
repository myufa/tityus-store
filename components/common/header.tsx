import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Logo from '../../public/home/Logo.png'

const Container = styled(Flex)`
`

type MenuButtonContainerProps = { open?: boolean }
const MenuButtonContainer = styled(Flex)<MenuButtonContainerProps>`
    ${({open}) => open && 'transform: rotate(90deg)'};
    transition: transform 0.45s ease-in;
`

const SearchInput = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 6px 0 0 6px;
    margin-right: 0;
    border-right: 0;
`

const SearchButton = styled.button`
    width: 57px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-radius: 0 6px 6px 0;
    background-color: #BD4141;
    cursor: pointer;
    padding: 0px;
`

const ScanButton = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-radius: 6px;
    background-color: #BD4141;
    cursor: pointer;
    padding: 0px;
`




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Container column>
            <Flex
                height={90}
                alignItems='center'
                justifyContent='space-between'>
                <Flex
                    onClick={() => setMenuOpen(v => !v)}
                    widthPct={20}
                    alignItems='center'>
                    <MenuButtonContainer open={menuOpen}>
                        <SizedImage src='/menu-icon.svg' alt='Menu' width={40} height={30} scale={0.8}/>
                    </MenuButtonContainer>
                </Flex>
                <Flex
                    column
                    widthPct={60}
                    center>
                    <SizedImage src={Logo} alt='Logo' width={150} height={49} scale={0.8}/>
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
            <Flex column>
                <Flex
                    center fullWidth>
                    <SearchInput placeholder='Search Product' />
                    <SearchButton>
                        <SizedImage src='/search-icon.svg' alt='Search' width={24} height={24} />
                    </SearchButton>
                </Flex>
                <Flex marginTop={8}>
                    <ScanButton>
                        Scan Code
                    </ScanButton>
                </Flex>
            </Flex>
            <Flex>

            </Flex>
        </Container>
    )
}

export default Header

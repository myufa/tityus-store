import Link from 'next/link'
import styled from 'styled-components'

import Flex from './flex'


const HomeButton = styled.button`
    background-color: #BD4141;
    color: white;
    font-family: 'Poppins';
    font-size: 16px;
    border-radius: 40px;
    cursor: pointer;
    z-index: 3;
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
`

const HomeButtonHeader = () => {
    return (
        <Flex justifyContent='end' alignItems='center' height={100} marginRight={60}>
            <Link href='/home' passHref>
                <HomeButton>Home</HomeButton>
            </Link>
        </Flex>
    )
}

export default HomeButtonHeader

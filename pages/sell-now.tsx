import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from 'components/common/flex'
import SellMenu from 'components/home/sell-menu'
import HomeButtonHeader from 'components/common/home-button-header'
import useStore from 'store'


const Container = styled(Flex)`
    position: relative;
    width: 100%;
    height: 650px;
`

const SectionHeading = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    text-align: center;
    color: white;
`

const SellNow = () => {
    const clearSurveyAnswers = useStore(state => state.clearSurveyAnswers)

    useEffect(() => {
        clearSurveyAnswers()
    }, [])

    return (
        <Container column>
            <HomeButtonHeader />
            <Flex center>
                <Flex column>
                    <Flex center marginBottom={30}>
                        <SectionHeading>What can you sell?</SectionHeading>
                    </Flex>
                    <SellMenu />
                </Flex>
            </Flex>
        </Container>
    )
}

export default SellNow

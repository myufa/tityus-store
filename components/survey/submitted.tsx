import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'

const Container = styled(Flex)`
`

const Heading = styled.h1`
    font-size: 60px;
    font-weight: bold;
`

const SubHeading = styled.h2`
    font-size: 20px;
`

const SubmittedScreen = () => {
    const [dots, setDots] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => setDots(curDots => (curDots % 3) + 1), 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Container column center height={650}>
            <Flex column>
                <Flex justifyContent='center'>
                    <Image src='/success-check.svg' alt='Success' width={134} height={134} />
                </Flex>
                <Flex justifyContent='center'>
                    <Heading>Submission Successful.</Heading>
                </Flex>
                <Flex justifyContent='center'>
                    <SubHeading>You will be redirected to the price evaluation page shortly{'.'.repeat(dots).padEnd(3, '\u00A0')}</SubHeading>
                </Flex>
            </Flex>
        </Container>
    )
}

export default SubmittedScreen

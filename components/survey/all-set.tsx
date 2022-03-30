import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'

const Container = styled(Flex)`
`

const Heading = styled.h1`
    font-size: 65px;
    font-weight: bold;
`

const SubHeading = styled.h2`
    font-weight: 600;
    font-family: 'Raleway';
    font-size: 22px;
    text-align: center;
    width: 870px;
`

const AllSetScreen = () => {
    return (
        <Container column center height={650}>
            <Flex column>
                <Flex justifyContent='center'>
                    <Heading>You’re all set for now.</Heading>
                </Flex>
                <Flex justifyContent='center'>
                    <SubHeading>
                        Our team will contact you shortly to discuss the next steps. We will send you information
                        about the mandatory medical check to the email address and home
                        address you have provided. For any further inquiries, please contact admin@tityus.org.
                    </SubHeading>
                </Flex>
                <Flex justifyContent='center' marginTop={100}>
                    <SubHeading>We look forward to working with you.</SubHeading>
                </Flex>
            </Flex>
        </Container>
    )
}

export default AllSetScreen

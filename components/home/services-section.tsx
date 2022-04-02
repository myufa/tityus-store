import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'

import Logo from '../../public/home/Logo.png'
import SizedImage from 'components/common/sized-image'

const Container = styled(Flex)`
`

const InnerConatiner = styled(Flex)`
`

const InnerColumn = styled(Flex)`
    width: 78px;
    height: 78px;
    border: 0.31625px solid transparent;
    border-radius: 12px;
    margin: 3px;
    background: white;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.15);
`

const Caption = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 10px;
    text-align: center;
`

const ServicesSection = () => {
    return (
        <Container column  center>
            <Flex fullWidth justifyContent='space-between'>
                <InnerColumn column>
                    <Flex center >
                        <SizedImage src='/truck-icon.svg' alt='Truck' width={40} height={40} />
                    </Flex>
                    <Flex center>
                        <Caption>Shipping<br />Nationwide</Caption>
                    </Flex>
                </InnerColumn>
                <InnerColumn column>
                    <Flex center >
                        <SizedImage src='/customer-service-icon.svg' alt='Customer Service' width={40} height={40} />
                    </Flex>
                    <Flex center>
                        <Caption>5-star<br />Service</Caption>
                    </Flex>
                </InnerColumn>
                <InnerColumn column>
                    <Flex center >
                        <SizedImage src='/bill-icon.svg' alt='Bill' width={40} height={40} />
                    </Flex>
                    <Flex center>
                        <Caption>Secure<br />Payments</Caption>
                    </Flex>
                </InnerColumn>
                <InnerColumn column>
                    <Flex center >
                        <SizedImage src='/ticket.svg' alt='Access' width={40} height={40} />
                    </Flex>
                    <Flex center>
                        <Caption>Easy<br />Access</Caption>
                    </Flex>
                </InnerColumn>
            </Flex>
        </Container>
    )
}

export default ServicesSection
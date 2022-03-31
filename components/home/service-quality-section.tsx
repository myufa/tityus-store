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
    border: 0.31625px solid #B2B2B2;
    border-radius: 16px;
`

const InnerColumn = styled(Flex)`
    border-right: 0.31625px solid #B2B2B2;
    padding: 3px;
`

const Caption = styled.h2`
    text-align: center;
`

const ServiceQualitySection = () => {
    return (
        <Container column height={250} center>
            <InnerConatiner height={160} fullWidth>
                <InnerColumn column widthPct={25}>
                    <Flex center heightPct={60}>
                        <SizedImage src='/truck-icon.svg' alt='Truck' width={85} height={85} />
                    </Flex>
                    <Flex center>
                        <Caption>Shipping<br />Nationwide</Caption>
                    </Flex>
                </InnerColumn>
                <InnerColumn column widthPct={25}>
                    <Flex center heightPct={60}>
                        <SizedImage src='/customer-service-icon.svg' alt='Customer Service' width={85} height={85} />
                    </Flex>
                    <Flex>
                        <Caption>24/7<br />Customer Support</Caption>
                    </Flex>
                </InnerColumn>
                <InnerColumn column widthPct={25}>
                    <Flex center heightPct={60}>
                        <SizedImage src='/bill-icon.svg' alt='Bill' width={85} height={85} />
                    </Flex>
                    <Flex>
                        <Caption>Secure<br />Payment System</Caption>
                    </Flex>
                </InnerColumn>
                <Flex column widthPct={25}>
                    <Flex center heightPct={60}>
                        <SizedImage src='/ticket.svg' alt='Access' width={85} height={85} />
                    </Flex>
                    <Flex>
                        <Caption>Easier access to<br />Transplant Centers</Caption>
                    </Flex>
                </Flex>
            </InnerConatiner>
        </Container>
    )
}

export default ServiceQualitySection

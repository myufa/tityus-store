import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore from 'store'
import { useRouter } from 'next/router'

const Container = styled(Flex)`
    padding: 0 22px;
    overflow: auto;
`

const Heading = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 80%;
`

const SubHeading = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
`

const InfoInput = styled.input`
    background: #FFFFFF;
    border-radius: 20px;
    border: 0px solid transparent;
    margin-bottom: 20px;
    height: 54px;
    text-indent: 20px;
    ::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        font-size: 14px;
        /* padding-left: 15px; */
    }
`

const MessageInput = styled.textarea`
    margin-bottom: 20px;
    background: #FFFFFF;
    border-radius: 20px;
    border: 0px solid transparent;
    margin-bottom: 20px;
    height: 320px;
    text-indent: 20px;
    padding-top: 20px;
    ::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        font-size: 14px;
    }
`

const ContinueButton = styled.button`
    width: 320px;
    height: 60px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #BD4040;
    border-radius: 20px;
    border: none;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
`

const MethodContainer = styled(Flex)`
    background: white;
    border-radius: 20px;
    height: 85px;
`

const ShippingContainer = styled(Flex)`
    border-bottom: 1px solid #BFC9DA;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
`

const MethodCheckBox = styled.input`
    width: 17px;
    height: 17px;
`

const ShippingPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const router = useRouter()

    const onClickBack = () => router.back()

    return (
        <Container column>
            <Flex alignItems='center'>
                &nbsp;&nbsp;
                <SizedImage src='/left-arrow.svg' alt='Back' width={24} height={24} onClick={onClickBack} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Heading>Shipping Method</Heading>
            </Flex>
            <MethodContainer column>
                <ShippingContainer
                    heightPct={50}
                    fullWidth
                    alignItems='center'
                    justifyContent='space-between'
                    paddingLeft={30}
                    >
                    <MethodCheckBox type='checkbox' />
                    <Flex widthPct={60}>Shipping</Flex>
                </ShippingContainer>
                <Flex
                    heightPct={50}
                    fullWidth
                    alignItems='center'
                    justifyContent='space-between'
                    paddingLeft={30}>
                    <MethodCheckBox type='checkbox' />
                    <Flex widthPct={60}>In-store pickup</Flex>
                </Flex>
            </MethodContainer>
            <br />
            <Flex>
                <SubHeading>Shipping Address</SubHeading>
            </Flex>
            <InfoInput placeholder='Full Name' />
            <InfoInput placeholder='Email Address' />
            <InfoInput placeholder='Phone Number' />
            <InfoInput placeholder='Address' />
            <Flex>
                <InfoInput placeholder='Zipcode' />
                &nbsp;
                <InfoInput placeholder='City' />
            </Flex>
            <InfoInput placeholder='State' />
            <br />
            <Flex center marginBottom={20}>
                <Link href='/payment' passHref>
                    <ContinueButton>Continue</ContinueButton>
                </Link>
            </Flex>
        </Container>
    )
}

export default ShippingPage

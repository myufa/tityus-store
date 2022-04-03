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

const Cost = styled(Flex)`
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #414141;
        margin: 4px 0;
    }
`

const Total = styled(Flex)`
    h2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 22px;
        color: #2F3733;
    }
`

const SaveCard = styled(Flex)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
`

const SaveCardCheckbox = styled.input`
    width: 20px;
    height: 20px;
`

const ShippingPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const catalogue = useStore(state => state.catalogue)

    const inBagItems = [...catalogue.entries()].filter(([_, { inBag }]) => inBag)

    const totalCost = inBagItems.reduce((acc, [_, { price }]) => price + acc, 0)

    const router = useRouter()

    const onClickBack = () => router.back()

    return (
        <Container column>
            <Flex alignItems='center'>
                &nbsp;&nbsp;
                <SizedImage src='/left-arrow.svg' alt='Back' width={24} height={24} onClick={onClickBack} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Heading>Payment</Heading>
            </Flex>
            <Flex fullWidth column paddingLeft={30} paddingRight={30}>
                <Cost fullWidth justifyContent='space-between'>
                    <p>Subtotal</p>
                    <p>${totalCost.toLocaleString('en-US')}</p>
                </Cost>
                <Cost fullWidth justifyContent='space-between'>
                    <p>Tax (6%)</p>
                    <p>${(0.06 * totalCost).toLocaleString('en-US')}</p>
                </Cost>
                <Total fullWidth justifyContent='space-between'>
                    <h2>Total</h2>
                    <h2>${(1.06 * totalCost).toLocaleString('en-US')}</h2>
                </Total>
            </Flex>
            <br />
            <InfoInput placeholder='Card Holder Name' />
            <InfoInput placeholder='Card Number' />
            <Flex>
                <InfoInput placeholder='MM/YY' />
                &nbsp;
                <InfoInput placeholder='CVV' />
            </Flex>
            <Flex paddingTop={10} paddingBottom={10}>
                <SizedImage src='/divider.svg' alt='divider' width={300} height={2}/>
            </Flex>
            <br />
            <SaveCard fullWidth alignItems='center'>
                <SaveCardCheckbox type='checkbox' />
                &nbsp;&nbsp;
                Save this card
            </SaveCard>
            <br /><br />
            <Flex center marginBottom={20}>
                <Link href='/confirmed' passHref>
                <ContinueButton>Pay Now</ContinueButton>
                </Link>
            </Flex>
        </Container>
    )
}

export default ShippingPage

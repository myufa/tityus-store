import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from '../components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore from 'store'

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

const Address = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #414141;
`

const InfoInput = styled.input`
    background: #FFFFFF;
    border-radius: 20px;
    border: 0px solid transparent;
    margin-bottom: 20px;
    height: 70px;
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

const SendMessageButton = styled.button`
    width: 280px;
    height: 66px;
    padding: 0 30px;
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
    &:hover {
        color: black;
    }
`

const ContactPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    return (
        <Container column>
            <Flex alignItems='center'>
                <SizedImage src='/icon-contact.svg' alt='Store' width={26} height={23}/>
                &nbsp;&nbsp;
                <Heading>Get in Touch</Heading>
            </Flex>
            <Flex>
                <Address>
                    +911 0113 0114<br />
                    admin@tityus.org<br />
                    2000 Bonisteel Blvd, Ann Arbor, MI 48109
                </Address>
            </Flex>
            <InfoInput placeholder='First Name' />
            <InfoInput placeholder='Last Name' />
            <InfoInput placeholder='Email Address' />
            <InfoInput placeholder='Phone Number' />
            <MessageInput placeholder='Message' />
            <Flex center marginBottom={20}>
                <SendMessageButton>Send a Message</SendMessageButton>
            </Flex>
        </Container>
    )
}

export default ContactPage

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore, { AquireMethod } from 'store'
import { useRouter } from 'next/router'

const storeData = [
    { name: 'Harlem', address: '517 E 117th Street, New York, NY', hours: 'Open today: 8:00am - 10:00pm', phoneNumber: '212-835-0860'},
    { name: 'Manhatten East Village', address: '500 E 14th St, New York, NY', hours: 'Open today: 8:00am - 9:00pm', phoneNumber: '917-994-3522'},
    { name: 'LA Sunset', address: '5500 W Sunset Blvd, Los Angeles, CA', hours: 'Open today: 8:00am - 10:00pm', phoneNumber: '213-588-7000'},
    { name: 'San Fransisco Central', address: '789 Mission St, San Francisco, CA', hours: 'Open today: 9:00am - 6:00pm', phoneNumber: '415-343-6272'},
    { name: 'Minneapolis Uptown', address: '1300 W Lake St, Minneapolis, MN', hours: 'Open today: 7:00am - 8:00pm', phoneNumber: '612-607-5016'},
    { name: 'West Seattle', address: '2800 SW Barton St, Seattle, WA', hours: 'Open today: 8:00am - 10:00pm', phoneNumber: '206-932-1153'},
    { name: 'Nashville East', address: '3171 Lebanon Pike, Nashville, TN', hours: 'Open today: 8:00am - 10:00pm', phoneNumber: '615-889-4734'},
    { name: 'Detroit Allen Park', address: '3100 Fairlane Dr, Allen Park, MI', hours: 'Open today: 8:00am - 10:00pm', phoneNumber: '313-768-0064'},
]

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

type StoreConatinerProps = { selected: boolean }
const StoreConatiner = styled(Flex)<StoreConatinerProps>`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 0 0px 0 20px;
    height: 120px;
    margin-bottom: 20px;
    border: ${({ selected }) => selected && '3px solid #BD4040'};
`

const StoreName = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    color: #BD4040;
    width: 30%;
    margin-right: 5%;
`

const StoreInfo = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    width: max-content;

    color: #414141;

`

const ShippingPage = () => {
    const [selectedStore, setSelectedStore] = useState<number>()
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const updateAquireMethod = useStore(state => state.updateAquireMethod)
    const aquireMethod = useStore(state => state.aquireMethod)

    const router = useRouter()

    const onClickBack = () => router.back()

    const onClickStore = (idx: number) => {
        if (selectedStore === idx) {
            setSelectedStore(undefined)
            return
        }
        setSelectedStore(idx)
    }

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
                    <MethodCheckBox
                        type='checkbox'
                        checked={aquireMethod === AquireMethod.DELIVERY}
                        onClick={() => updateAquireMethod(AquireMethod.DELIVERY)} />
                    <Flex widthPct={60}>Shipping</Flex>
                </ShippingContainer>
                <Flex
                    heightPct={50}
                    fullWidth
                    alignItems='center'
                    justifyContent='space-between'
                    paddingLeft={30}>
                    <MethodCheckBox
                        type='checkbox'
                        checked={aquireMethod === AquireMethod.PICKUP}
                        onClick={() => updateAquireMethod(AquireMethod.PICKUP)}/>
                    <Flex widthPct={60}>In-store pickup</Flex>
                </Flex>
            </MethodContainer>
            <br />
            {aquireMethod === AquireMethod.DELIVERY ?(
                <Flex justifyContent='center'>
                    <Flex column>
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
                    </Flex>
                </Flex>
            ) : (
                <Flex column>
                    {storeData.map(({ name, address, hours, phoneNumber }, idx) => (
                        <StoreConatiner
                            key={name}
                            alignItems='center'
                            onClick={() => onClickStore(idx)}
                            selected={idx === selectedStore}>
                            <StoreName>
                                {name}
                            </StoreName>
                            <StoreInfo>
                                {address}<br />{hours}<br />{phoneNumber}
                            </StoreInfo>
                        </StoreConatiner>
                    ))}
                </Flex>
            )}
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

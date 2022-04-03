import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore from 'store'
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

const StoreConatiner = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 0 0px 0 20px;
    height: 120px;
    margin-bottom: 20px;
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

const StoresPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()
    const router = useRouter()
    const { organ, itemId } = router.query

    return (
        <Container column>
            <Flex alignItems='center'>
                <SizedImage src='/icon-store.svg' alt='Store' width={26} height={23}/>
                &nbsp;&nbsp;
                <Heading>Store Locator</Heading>
            </Flex>
            {storeData.map(({ name, address, hours, phoneNumber }) => (
                <StoreConatiner key={name} alignItems='center'>
                    <StoreName>
                        {name}
                    </StoreName>
                    <Link href={`http://maps.google.com/?q=${address}`} passHref>
                        <StoreInfo>
                            {address}<br />{hours}<br />{phoneNumber}
                        </StoreInfo>
                    </Link>
                </StoreConatiner>
            ))}
        </Container>
    )
}

export default StoresPage

import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore, { AquireMethod, Organ } from 'store'

import Kidney from 'public/home/kidneyweb.png'
import Liver from 'public/home/liver1.png'
import Marrow from 'public/home/bonemarrow1.png'
import Cornea from 'public/home/cornea2.png'
import { useRouter } from 'next/router'


const organImageMap = {
    [Organ.KIDNEY]: { image: Kidney, w: 52, h: 73 },
    [Organ.LIVER]: { image: Liver, w: 73, h: 73 },
    [Organ.MARROW]: { image: Marrow, w: 52, h: 73 },
    [Organ.CORNEA]: { image: Cornea, w: 80, h: 73 },
}

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
    margin-top: 0;
`

const PurchasedBanner = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 25px;
    margin: 0 0 20px 0;
    height: 140px;
`

const PurchasedCard = styled(Flex)`
    border-bottom: 1px solid #BEC9D9;
    padding: 25px;
    margin: 0 0 20px 0;
    height: 110px;
`

const PackageConatiner = styled(Flex)`
    background: #BD4040;
    border-radius: 12px;
`

const Info = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    margin: 5px 0 3px 0;
`

const OrderInfo = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    margin: 5px 0 3px 0;
`

const Summary = styled.h4`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin: 5px 0 3px 0;
    color: #7D8FAB;
`

const ConfirmedPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()
    const ID = uuid()

    const updateCatalogue = useStore(state => state.updateCatalogue)
    const aquireMethod = useStore(state => state.aquireMethod)
    const updateAquireMethod = useStore(state => state.updateAquireMethod)

    const catalogue = useStore(state => state.catalogue)

    const purchasedItems = [...catalogue.entries()].filter(([_, { inBag }]) => inBag)

    const totalCost = purchasedItems.reduce((acc, [_, { price }]) => price + acc, 0)

    useEffect(() => {
        return () => {
            purchasedItems.forEach(([itemId, _]) => {
                updateCatalogue(itemId, { inBag: false })
            })
            updateAquireMethod(AquireMethod.DELIVERY)
        }
    }, [])

    const router = useRouter()

    return (
        <Container column>
            <Flex fullWidth marginTop={20}>
                &nbsp;&nbsp;
                <Flex marginTop={5}>
                    <SizedImage src='/confirm-heart.svg' alt='Love' width={24} height={24} />
                </Flex>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Heading>
                    Thank you<br />
                    for your order!
                </Heading>
            </Flex>
            <PurchasedBanner paddingLeft={30} paddingRight={30} paddingTop={10}>
                <Flex fullHeight>
                    <PackageConatiner width={50} height={50} center marginRight={20} marginTop={5}>
                        <SizedImage src='/package.svg' alt='Package' width={24} height={24} />
                    </PackageConatiner>
                </Flex>
                <Flex column>
                    <OrderInfo>Order ID #{ID.slice(0,7)}</OrderInfo>
                    <Summary>
                        {purchasedItems.length} Items&nbsp;&nbsp;&nbsp;&nbsp;
                        •{aquireMethod === AquireMethod.DELIVERY ? 'Delivery' : 'In-store pickup'}
                        </Summary>
                    <OrderInfo>${totalCost.toLocaleString('en-US')}</OrderInfo>
                </Flex>
            </PurchasedBanner>
            {purchasedItems.map(([itemId, { name, organType, price }]) => (
                <PurchasedCard key={itemId} column>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Flex widthPct={40} justifyContent='flex-start'>
                            <SizedImage
                                src={organImageMap[organType].image}
                                alt={organType}
                                width={organImageMap[organType].w}
                                height={organImageMap[organType].h}/>
                        </Flex>
                        <Flex widthPct={60}>
                            <Info>{name}</Info>
                        </Flex>
                    </Flex>
                </PurchasedCard>
            ))}
        </Container>
    )
}

export default ConfirmedPage

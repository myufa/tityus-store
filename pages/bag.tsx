import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore, { Organ } from 'store'

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
    min-height: 100vh;
`

const Heading = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 80%;
`

const InBagCard = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 25px;
    margin: 0 0 20px 0;
    height: 140px;
`

const Info = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    margin: 5px 0 3px 0;
    width: 66%;
`

const CartContainer = styled.div`
    height: 50vh;
    width: 100%;
    overflow: auto;
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

const CheckOutButton = styled.button`
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


const BagPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const updateCatalogue = useStore(state => state.updateCatalogue)

    const catalogue = useStore(state => state.catalogue)

    const inBagItems = [...catalogue.entries()].filter(([_, { inBag }]) => inBag)

    const totalCost = inBagItems.reduce((acc, [_, { price }]) => price + acc, 0)

    const router = useRouter()

    const onClickBack = () => router.back()

    const onDelete = (itemId: number) => {
        updateCatalogue(itemId, { inBag: false })
    }

    return (
        <Container column alignItems='center'>
            <Flex fullWidth alignItems='center'>
                &nbsp;&nbsp;
                <SizedImage src='/left-arrow.svg' alt='Back' width={24} height={24} onClick={onClickBack} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Heading>Shopping Cart</Heading>
            </Flex>
            <CartContainer>
                {inBagItems.map(([itemId, { name, organType, price }]) => (
                    <InBagCard key={itemId} column justifyContent='center'>
                        <Flex alignItems='center' justifyContent='space-between'>
                            <Flex widthPct={30} justifyContent='flex-start'>
                                <SizedImage
                                    src={organImageMap[organType].image}
                                    alt={organType}
                                    width={organImageMap[organType].w}
                                    height={organImageMap[organType].h}/>
                            </Flex>
                            <Info>{name}<br />${price.toLocaleString('en-US')}</Info>
                            <Flex widthPct={10} justifyContent='flex-end'>
                                <SizedImage
                                    src='/trash-icon.svg'
                                    alt='Delete'
                                    width={20}
                                    height={25}
                                    onClick={() => onDelete(itemId)}/>
                            </Flex>
                        </Flex>
                    </InBagCard>
                ))}
            </CartContainer>
            <Flex paddingTop={10} paddingBottom={10}>
                <SizedImage src='/divider.svg' alt='divider' width={300} height={2}/>
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
            <Link href='/shipping' passHref>
                <CheckOutButton>Check Out</CheckOutButton>
            </Link>
        </Container>
    )
}

export default BagPage

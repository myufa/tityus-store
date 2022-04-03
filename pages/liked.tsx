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
`

const Heading = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 80%;
`

const LikedCard = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 25px;
    margin: 0 0 20px 0;
    height: 180px;
`

const Info = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    margin: 5px 0 3px 0;
`

const AddToCartButton = styled.button`
    width: 166px;
    height: 42px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #BD4040;
    border-radius: 15px;
    border: none;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
`


const LikedPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const updateCatalogue = useStore(state => state.updateCatalogue)

    const catalogue = useStore(state => state.catalogue)

    const likedItems = [...catalogue.entries()].filter(([_, { liked }]) => liked)

    const router = useRouter()

    const onClickBack = () => router.back()

    const onDelete = (itemId: number) => {
        updateCatalogue(itemId, { liked: false })
    }

    const onAddToCart = (itemId: number) => {
        updateCatalogue(itemId, { liked: false, inBag: true })
    }

    return (
        <Container column>
            <Flex fullWidth alignItems='center'>
                &nbsp;&nbsp;
                <SizedImage src='/left-arrow.svg' alt='Back' width={24} height={24} onClick={onClickBack} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Heading>Saved Items</Heading>
            </Flex>
            {likedItems.map(([itemId, { name, organType, price }]) => (
                <LikedCard key={itemId} column>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Flex widthPct={30} justifyContent='flex-start'>
                            <SizedImage
                                src={organImageMap[organType].image}
                                alt={organType}
                                width={organImageMap[organType].w}
                                height={organImageMap[organType].h}/>
                        </Flex>
                        <Info>{name}<br />${price.toLocaleString('en-US')}</Info>
                        <Flex widthPct={30} justifyContent='flex-end'>
                            <SizedImage
                                src='/trash-icon.svg'
                                alt='Delete'
                                width={20}
                                height={25}
                                onClick={() => onDelete(itemId)}/>
                        </Flex>
                    </Flex>
                    <Flex center paddingTop={20} paddingBottom={20}>
                        <AddToCartButton onClick={() => onAddToCart(itemId)}>
                            Add to Cart
                        </AddToCartButton>
                    </Flex>
                </LikedCard>
            ))}
        </Container>
    )
}

export default LikedPage

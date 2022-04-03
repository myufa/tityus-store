import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Kidney from 'public/home/kidneyweb.png'
import Liver from 'public/home/liver1.png'
import Marrow from 'public/home/bonemarrow1.png'
import Cornea from 'public/home/cornea2.png'

import useStore, { Organ } from 'store'
import { useRouter } from 'next/router'

const organImageMap = {
    [Organ.KIDNEY]: { image: Kidney, w: 77, h: 109 },
    [Organ.LIVER]: { image: Liver, w: 109, h: 109 },
    [Organ.MARROW]: { image: Marrow, w: 77, h: 109 },
    [Organ.CORNEA]: { image: Cornea, w: 123, h: 109 },
}

const Container = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 15px;
    margin: 0 0 20px 0;
    width: 160px;
    max-width: 49%;
    height: 230px;
`

const Price = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.4px;
    margin: 5px 0 3px 0;
`

const Name = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    margin: 5px 0 3px 0;
`

type OrganCardProps = { itemId: number, liked: boolean, organType: Organ, price: number, name: string  }
const OrganCard = ({ itemId, liked, organType, price, name }: OrganCardProps) => {
    const updateCatalogue = useStore(state => state.updateCatalogue)
    const likedString = liked ? 'liked' : 'unliked'

    const onClickLike = () => {
        updateCatalogue(itemId, { liked: !liked })
    }

    return (
        <Container column>
            <Flex fullWidth justifyContent='flex-end'>
                <SizedImage
                    src={`/${likedString}-icon.svg`}
                    alt='like'
                    width={30}
                    height={30}
                    onClick={onClickLike} />
            </Flex>
            <Flex center>
                <SizedImage
                    src={organImageMap[organType].image}
                    alt={organType}
                    width={organImageMap[organType].w}
                    height={organImageMap[organType].h} />
            </Flex>
            <Flex center>
                <Price>${price.toLocaleString('en-US')}</Price>
            </Flex>
            <Flex center>
                <Name>{name}</Name>
            </Flex>
        </Container>
    )
}

export default OrganCard

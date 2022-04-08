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

const tagPrefixMap = {
    [Organ.KIDNEY]: 'TYPE',
    [Organ.LIVER]: 'TYPE',
    [Organ.MARROW]: 'HLA-',
    [Organ.CORNEA]: 'UNIVERSAL',
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

const OrganImageContainer = styled(Flex)`
    position: relative;
`

const Label = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.4px;
    margin: 5px 0 0px 0;
`

const Tag = styled(Flex)`
    position: absolute;
    top: 88px;
    right: 7px;
    width: 29px;
    height: 45px;
    background: #BD4040;
    border-radius: 2px;
    z-index: 2;
    padding: 0 2px;
`
const TagPrefix = styled.h4`
    width: 27px;
    text-align: center;
    color: white;
    font-size: 12px;
    font-family: 'Bebas Neue';
    margin: 0;
    font-style: normal;
    overflow-wrap: break-word;
`
const TagSuffix = styled.h5`
    color: white;
    font-size: 18px;
    font-family: 'Bebas Neue';
    font-style: normal;
    margin: 0;
`

type OrganCardProps = { itemId: number, liked: boolean, inBag: boolean, organType: Organ, bloodType?: string, price: number, id: string }
const OrganCard = ({ itemId, liked, inBag, organType, bloodType, price, id }: OrganCardProps) => {
    const updateCatalogue = useStore(state => state.updateCatalogue)
    const likedString = liked ? 'liked' : 'unliked'

    const onClickLike = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e) e.preventDefault()
        if (inBag) return
        updateCatalogue(itemId, { liked: !liked })
    }

    return (
        <Container column>
            <Link href={`/shop/${organType}/${itemId}`} passHref key={itemId}>
                <Flex column>
                    <OrganImageContainer fullWidth justifyContent='flex-end'>
                        <SizedImage
                            src={`/${likedString}-icon.svg`}
                            alt='like'
                            width={30}
                            height={30}
                            onClick={onClickLike} />
                        <Tag column center>
                            <TagPrefix>{tagPrefixMap[organType]}</TagPrefix>
                            {organType !== Organ.CORNEA && <TagSuffix>{ bloodType}</TagSuffix>}
                        </Tag>
                    </OrganImageContainer>
                    <Flex center>
                        <SizedImage
                            src={organImageMap[organType].image}
                            alt={organType}
                            width={organImageMap[organType].w}
                            height={organImageMap[organType].h} />
                    </Flex>
                    <Flex center>
                        <Label>${price.toLocaleString('en-US')}</Label>
                    </Flex>
                    <Flex center>
                        <Label>{id}</Label>
                    </Flex>
                </Flex>
            </Link>
        </Container>
    )
}

export default OrganCard

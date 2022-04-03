import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore, { Organ, OrganItem } from 'store'
import { useRouter } from 'next/router'

import Kidney from 'public/home/kidneyweb.png'
import Liver from 'public/home/liver1.png'
import Marrow from 'public/home/bonemarrow1.png'
import Cornea from 'public/home/cornea2.png'

const organImageMap = {
    [Organ.KIDNEY]: { image: Kidney, w: 155, h: 219 },
    [Organ.LIVER]: { image: Liver, w: 220, h: 220 },
    [Organ.MARROW]: { image: Marrow, w: 155, h: 219 },
    [Organ.CORNEA]: { image: Cornea, w: 183, h: 157 },
}

const descriptionMap = {
    [Organ.KIDNEY]: 'The blood type of the vendor must be compatible with the recipient. The rules for blood type in transplantation are the same as they are for blood transfusion. The following blood types are compatible:',
    [Organ.LIVER]: 'The blood type of the vendor must be compatible with the recipient. The rules for blood type in transplantation are the same as they are for blood transfusion. The following blood types are compatible:',
    [Organ.MARROW]: 'HLA is a protein – or marker – found on most cells in your body. Your immune system uses HLA markers to know which cells belong in your body and which do not. There are many HLA markers that make a person’s tissue type unique. Matching certain markers is critical to a successful transplant.',
    [Organ.CORNEA]: `Vendor's blood type, eye color and eyesight are not factors that affect transplant compatiblity. Aside from those suffering from infections or a few highly communicable diseases, everyone is a universal donor for corneal tissue. A portion of our vendors might have pre-existing vision impairments (ie.ocular tumors in the back of the eye), but their corneas have been confirmed to still be healthy and functional upon thorough medical examination.`,
}

const metricMap = {
    [Organ.KIDNEY]: 'Weight',
    [Organ.LIVER]: 'Weight',
    [Organ.MARROW]: 'Volume',
    [Organ.CORNEA]: 'Thickness',
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

const SubHeading = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 1px;
`

const DetailConatiner = styled(Flex)`
    background: #FFFFFF;
    border-radius: 20px;
    height: 70px;
    margin-bottom: 10px;
`

const DetailLabel = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #BABABA;
    margin: 3px 0;
`

const DetailValue = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 21px;
    margin: 3px 0;
`

const Price = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 39px;
    color: #BD4040;
`

const Explanation = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #414141;
`

const AddToCartButton = styled.button`
    width: 250px;
    height: 60px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #BD4040;
    border-radius: 15px;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
`

const StoresPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()

    const updateCatalogue = useStore(state => state.updateCatalogue)

    const catalogue = useStore(state => state.catalogue)

    const router = useRouter()
    const { organ, itemId } = router.query as { organ: Organ, itemId: string }

    const item = catalogue.get(+`${itemId}`)

    const onAddToCart = () => {
        updateCatalogue(+`${itemId}`, { liked: false, inBag: true })
        router.push('/bag')
    }

    const onRemoveFromCart = () => {
        updateCatalogue(+`${itemId}`, { liked: false, inBag: false })
    }

    if (!item) {
        return null
    }

    const {
        name, organType, price, vendorAge,
        amount, origin, procedureDate, inBag
    } = item

    return (
        <Container column>
            <Flex alignItems='center'>
                <Heading>{name}</Heading>
            </Flex>
            <Flex justifyContent='space-between'>
                <Flex column widthPct={40}>
                    <DetailConatiner column center>
                        <DetailLabel>{metricMap[organType]}</DetailLabel>
                        <DetailValue>{amount}</DetailValue>
                    </DetailConatiner>
                    <DetailConatiner column center>
                        <DetailLabel>Origin</DetailLabel>
                        <DetailValue>{origin}</DetailValue>
                    </DetailConatiner>
                    <DetailConatiner column center>
                        <DetailLabel>Vendor’s Age</DetailLabel>
                        <DetailValue>{vendorAge}</DetailValue>
                    </DetailConatiner>
                    <DetailConatiner column center>
                        <DetailLabel>Procuration Date</DetailLabel>
                        <DetailValue>{procedureDate}</DetailValue>
                    </DetailConatiner>
                </Flex>
                <Flex column widthPct={50} center>
                    <SizedImage
                        src={organImageMap[organType].image}
                        alt={organType}
                        width={organImageMap[organType].w}
                        height={organImageMap[organType].h} />
                </Flex>
            </Flex>
            <Flex justifyContent='space-between'>
                <Price>${price.toLocaleString('en-US')}</Price>
            </Flex>
            <SubHeading>
                Explanation
            </SubHeading>
            <Flex fullWidth>
                <Explanation>{descriptionMap[organType]}</Explanation>
            </Flex>
            {[Organ.KIDNEY, Organ.LIVER].includes(organType) && (
                <Flex>
                    <Flex column widthPct={30}>
                        <Explanation>
                            <b>Vendor</b><br />
                            TYPE O<br />
                            TYPE A<br />
                            TYPE B<br />
                            TYPE AB<br />
                        </Explanation>
                    </Flex>
                    <Flex column>
                        <Explanation>
                            <b>Compatible recipient</b><br />
                            TYPE O, A, B, AB<br />
                            TYPE A, AB<br />
                            TYPE B, AB<br />
                            TYPE AB<br />
                        </Explanation>
                    </Flex>
                </Flex>
            )}
            <br />
            <Flex center>
                { inBag ? (
                    <AddToCartButton onClick={() => onRemoveFromCart()}>
                        Remove from cart
                    </AddToCartButton>)
                : (
                    <AddToCartButton onClick={() => onAddToCart()}>
                        Add to Cart
                    </AddToCartButton>
                )}
            </Flex>
            <br /><br />
        </Container>
    )
}

export default StoresPage

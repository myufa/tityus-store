import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'

import Kidney from 'public/home/kidneyweb.png'
import Liver from 'public/home/liver1.png'
import Marrow from 'public/home/bonemarrow1.png'
import Cornea from 'public/home/cornea2.png'
import SizedImage from 'components/common/sized-image'

const Container = styled(Flex)`
    height: 350px;
    width: 100%;
    overflow-x: scroll;
`

const Card = styled(Flex)`
    height: 320px;
    width: 210px;
    background: white;
    border-radius: 20px;
    margin-left: 10px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
`

const ImageContainer = styled(Flex)`
    height: 250px;
`

const LabelContainer = styled(Flex)`
    height: 70px;
    background: #BD4040;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    border-radius: 0 0 20px 20px;
`

const OfferingsSection = () => {
    return (
        <Container alignItems='center'>
            <Flex>
                <Card column justifyContent='space-between'>
                    <ImageContainer center>
                        <SizedImage src={Kidney} alt='Kidney' width={123} height={175} />
                    </ImageContainer>
                    <LabelContainer center>
                        Kidney
                    </LabelContainer>
                </Card>
                <Card column justifyContent='space-between'>
                    <ImageContainer center>
                        <SizedImage src={Liver} alt='Liver' width={160} height={160} />
                    </ImageContainer>
                    <LabelContainer center>
                        Liver
                    </LabelContainer>
                </Card>
                <Card column justifyContent='space-between'>
                    <ImageContainer center>
                        <SizedImage src={Marrow} alt='Marrow' width={123} height={175} />
                    </ImageContainer>
                    <LabelContainer center>
                        Bone Marrow
                    </LabelContainer>
                </Card>
                <Card column justifyContent='space-between'>
                    <ImageContainer center>
                        <SizedImage src={Cornea} alt='Cornea' width={160} height={150} />
                    </ImageContainer>
                    <LabelContainer center>
                        Cornea
                    </LabelContainer>
                </Card>
            </Flex>
        </Container>
    )
}

export default OfferingsSection

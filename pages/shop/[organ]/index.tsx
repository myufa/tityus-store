import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import useStore, { Organ, OrganItem } from 'store'
import { useRouter } from 'next/router'
import OrganCard from 'components/shop/organ-item'

const Container = styled(Flex)`
    padding: 0 22px;
    overflow: auto;
`

const OrganSelect = styled.select`
    margin: 30px 0;
    border: 1px solid #B6B7B8;
    box-sizing: border-box;
    border-radius: 22px;
    width: 200px;
    height: 50px;
    background: transparent;
    text-indent: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #BD4040;
    &:active, &:focus {
        outline: none !important;
        border: 2px solid #BD4040;
    }
    background: url('/down-arrow.svg') no-repeat right;
    -webkit-appearance: none;
    background-position-x: 164px;
`

const CatalogueContainer = styled(Flex)`
    flex-direction: row;
    flex-wrap: wrap;
`

const StoresPage = () => {
    const useHeader = useStore(state => state.useHeader)
    const useFooter =  useStore(state => state.useFooter)
    useHeader()
    useFooter()
    const router = useRouter()

    const catalogue =  useStore(state => state.catalogue)
    const { organ } = router.query as { organ: Organ }

    const onSelectOrgan = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
        router.push(`/shop/${e.currentTarget.value}`)
    }

    return (
        <Container column>
            <OrganSelect value={organ} onChange={onSelectOrgan}>
                <option value={Organ.KIDNEY}>Kidney</option>
                <option value={Organ.LIVER}>Liver</option>
                <option value={Organ.MARROW}>Bone Marrow</option>
                <option value={Organ.CORNEA}>Cornea</option>
            </OrganSelect>
            <CatalogueContainer justifyContent='space-between'>
                {[...catalogue.entries()]
                    .filter(([_, { organType }]) => organType === organ)
                    .map(([itemId, { organType, bloodType, id, price, liked, inBag }]) => (
                    <OrganCard
                        key={itemId}
                        itemId={itemId}
                        organType={organType}
                        bloodType={bloodType}
                        id={id}
                        price={price}
                        liked={liked}
                        inBag={inBag} />
                ))}
            </CatalogueContainer>
        </Container>
    )
}

export default StoresPage

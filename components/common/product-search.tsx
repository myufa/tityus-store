import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Logo from 'public/home/Logo.png'

const SearchInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 6px 0 0 6px;
    border-color: transparent;
    margin-right: 0;
    border-right: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-indent: 20px;
    ::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        font-size: 14px;
    }
`

const SearchButton = styled.button`
    width: 57px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-radius: 0 6px 6px 0;
    background-color: #BD4141;
    cursor: pointer;
    padding: 0px;
    padding-top: 3px;
`

const ProductSearch = () => {
    return (
        <Flex column paddingBottom={20}>
            <Flex
                center fullWidth>
                <SearchInput placeholder='Search Product' />
                <SearchButton>
                    <SizedImage src='/scan-search.svg' alt='Search' width={24} height={24} />
                </SearchButton>
            </Flex>
        </Flex>
    )
}

export default ProductSearch

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import SizedImage from 'components/common/sized-image'

import Logo from 'public/home/Logo.png'
import useStore, { OrganItem } from 'store'
import { useRouter } from 'next/router'

const SearchContainer = styled(Flex)`
    position: relative;
`

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
    text-transform: uppercase;
    ::placeholder {
        text-transform: none;
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
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #BD4141;
    cursor: pointer;
    padding: 0px;
    padding-top: 3px;
`

const Suggestions = styled(Flex)`
    position: absolute;
    top: 53px;
    left: 0;
    max-height: 150px;
    overflow-y: auto;
    width: 100%;
    background: white;
    z-index: 2;
    border-radius: 3px;
    filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.05));
`

const Suggestion = styled(Flex)`
    border-bottom: 1px solid #BD4040;
`

const SuggestionText = styled.p`
    font-size: 14px;
    text-indent: 20px;
    font-style: normal;
    font-weight: bold;
    margin: none;
    padding: none;
`

const ProductSearch = () => {
    const [query, setQuery] = useState('')
    const catalogue = useStore(state => state.catalogue)
    const toggleSearch = useStore(state => state.toggleSearch)
    const suggestions = [...catalogue.entries()]
        .filter(([_, item]) => item.id.toLowerCase().includes(query.toLowerCase()))

    const router = useRouter()

    const onClickSuggestion = (idx: number, { organType }: OrganItem) => {
        toggleSearch(false)
        router.push(`/shop/${organType}/${idx}`)
    }

    return (
        <Flex column paddingBottom={20}>
            <SearchContainer
                center fullWidth>
                <SearchInput placeholder='Search Product' value={query} onChange={e => setQuery(e.currentTarget.value)} />
                <SearchButton>
                    <SizedImage src='/search.svg' alt='Search' width={24} height={24} />
                </SearchButton>
                {query && (
                    <Suggestions column>
                        {suggestions.map(([idx, item]) => (
                            <Suggestion key={item.id} onClick={(e) => {e.preventDefault(); e.stopPropagation; onClickSuggestion(idx, item)}}>
                                <SuggestionText>{item.id}</SuggestionText>
                            </Suggestion>
                        ))}
                    </Suggestions>
                )}
            </SearchContainer>
        </Flex>
    )
}

export default ProductSearch

import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from '../../components/common/flex'


const BarContainer = styled(Flex)`
    border: 1px solid white;
    padding: 3px;
`

type BarProps = { percent?: number }
const Bar = styled(Flex)<BarProps>`
    width: ${({ percent }) => percent || 0}%;
    background-color: white;
`

const PercentHeading = styled.h2`
    padding-left: 10px;
    font-size: 18px;
`

type ProgressBarProps = { percent?: number }
const ProgressBar = ({ percent = 0 }: ProgressBarProps) => {
    return (
        <Flex column fullWidth>
            <PercentHeading>{percent}%</PercentHeading>
            <BarContainer fullWidth height={20}>
                <Bar fullHeight percent={percent}/>
            </BarContainer>
        </Flex>
    )
}

export default ProgressBar

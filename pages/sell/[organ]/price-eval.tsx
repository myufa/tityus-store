import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import CountUp from 'react-countup'

import Flex from 'components/common/flex'
import HomeButtonHeader from 'components/common/home-button-header'
import SurveyButton from 'components/survey/survey-button'
import AllSetScreen from 'components/survey/all-set'
import { useEffect, useState } from 'react'
import useStore, { Organ, SurveyQuestionStatus } from 'store'

const Heading = styled.h1`
    font-size: 180px;
    font-weight: bold;
    margin: 0;
`

const SubHeading = styled.h2`
    font-size: 22px;
`

const organPresenterMap: { [key: string]: string } = {
    [Organ.KIDNEY]: Organ.KIDNEY,
    [Organ.LIVER]: Organ.LIVER,
    [Organ.BONE]: 'bone marrow',
    [Organ.CORNEA]: Organ.CORNEA,
}

const PriceEval = () => {
    const [accepted, setAccepted] = useState(false)
    const router = useRouter()
    const { organ } = router.query

    const surveyAnswers = useStore(state => state.surveyAnswers)
    const totalValue = [...surveyAnswers.values()].reduce(
        (acc, q) => {
            return (q.status === SurveyQuestionStatus.YES ? q.value : 0) + acc
        },
        0
    )

    useEffect(() => {
        if (!accepted) return
        const timeOutId = setTimeout(() => router.push('/home'), 15_000)
        return () => clearTimeout(timeOutId)
    }, [accepted])

    if (accepted) {
        return (
            <AllSetScreen />
        )
    }

    return (
        <Flex column height={650}>
            <HomeButtonHeader />
            <Flex column center heightPct={80}>
                <Flex column alignItems='center' widthPct={80}>
                    <SubHeading>You can sell your {organPresenterMap[organ as string]} for</SubHeading>
                    <Heading >
                        <CountUp end={totalValue} separator=',' prefix='$'/>
                    </Heading>
                    <Flex justifyContent='space-between' widthPct={30} marginTop={100}>
                        <SurveyButton onClick={() => setAccepted(true)}>Accept</SurveyButton>
                        <Link href='/home' passHref>
                            <SurveyButton>Decline</SurveyButton>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PriceEval

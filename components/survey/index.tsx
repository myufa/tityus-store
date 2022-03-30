import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import { Organ, SurveyQuestion, SurveyQuestionStatus, UserInfo } from 'store'
import useStore from 'store'
import HomeButtonHeader from 'components/common/home-button-header'
import ProgressBar from './progress-bar'
import QuestionTable from './question-table'

import SurveyButton from './survey-button'
import SubmittedScreen from './submitted'

import kidneySurvey from './kidney'
import liverSurvey from './liver'
import boneSurvey from './bone'
import corneaSurvey from './cornea'

const surveyMap = {
    [Organ.KIDNEY]: kidneySurvey,
    [Organ.LIVER]: liverSurvey,
    [Organ.BONE]: boneSurvey,
    [Organ.CORNEA]: corneaSurvey,
}

const Container = styled(Flex)`
    position: relative;
    width: 100%;
    height: 650px;
`

const SurveyContainer = styled(Flex)`
    padding: 0 15%;
`

const ProgressBarContainer = styled(Flex)`
    width: 70%;
`

type SurveyProps = { organ: Organ, bookmark: number }
const Survey = ({ organ, bookmark }: SurveyProps) => {
    const [submitted, setSubmitted] = useState(false)

    const surveyAnswers = useStore(state => state.surveyAnswers)
    const updateSurveyAnswers = useStore(state => state.updateSurveyAnswers)
    const questions = new Map([...surveyAnswers.entries()].slice(bookmark - 6, bookmark))

    const router = useRouter()

    const nextBookmark = bookmark + 6
    const percent = Math.min(Math.floor((bookmark / surveyAnswers.size) * 100), 100)

    const onUpdate = (idx: number, answer: SurveyQuestion) => {
        if (answer.status === surveyAnswers.get(idx)?.status) {
            surveyAnswers.set(idx, { ...answer, status: SurveyQuestionStatus.UNSELECTED })
        } else {
            surveyAnswers.set(idx, answer)
        }
        updateSurveyAnswers(new Map(surveyAnswers.entries()))
    }

    const onContinue = () => {
        if (bookmark < surveyAnswers.size) {
            router.push(`/sell/${organ}/${nextBookmark}`)
        } else {
            setSubmitted(true)
            setTimeout(() => router.push(`/sell/${organ}/price-eval`), 3050)
        }
    }

    useEffect(() => {
        if (!organ) return
        console.log(organ, surveyMap[organ])
        updateSurveyAnswers(surveyMap[organ])
    }, [organ])

    if (submitted) {
        return (
            <SubmittedScreen />
        )
    }

    return (
        <Container column>
            <HomeButtonHeader/>
            <SurveyContainer column>
                <ProgressBarContainer marginBottom={50}>
                    <ProgressBar percent={percent}/>
                </ProgressBarContainer>
                <QuestionTable
                    questions={questions}
                    onUpdate={onUpdate} />
                <Flex paddingTop={40}>
                    <SurveyButton onClick={onContinue}>
                        {bookmark < surveyAnswers.size ? 'Continue' : 'Submit'}
                    </SurveyButton>
                </Flex>
            </SurveyContainer>
        </Container>
    )
}

export default Survey

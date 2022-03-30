import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from '../../components/common/flex'
import { SurveyQuestion, SurveyQuestionPartial, SurveyQuestionStatus } from '../../store'

const QuestionP = styled.p`
`

type AnswerButtonProps = { selected?: boolean }
const AnswerButton = styled.button<AnswerButtonProps>`
    background: linear-gradient(180deg, #222222 99.99%, rgba(125, 131, 150, 0) 100%);
    border-radius: 5px;
    border: ${({ selected }) => selected ? '2px solid #ffffffc7' : '0 solid transparent'};
    width: 74px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

type QuestionTableProps = {
    questions: Map<number, SurveyQuestion>,
    onUpdate: (idx: number, answer: SurveyQuestion) => void
}
const QuestionTable = ({ questions, onUpdate }: QuestionTableProps) => {
    return (
        <Flex column height={324}>
            {[...questions.entries()].map(([idx, q]) => (
                <Flex key={idx} justifyContent='space-between'>
                    <Flex column>
                        <QuestionP>{idx + 1}.&nbsp;{q.text}</QuestionP>
                    </Flex>
                    <Flex column justifyContent='center'>
                        <Flex justifyContent='space-between' width={160}>
                            <AnswerButton
                                selected={q.status === SurveyQuestionStatus.YES}
                                onClick={() => onUpdate(idx, { ...q, status: SurveyQuestionStatus.YES })}>
                                Yes
                            </AnswerButton>
                            <AnswerButton
                                selected={q.status === SurveyQuestionStatus.NO}
                                onClick={() => onUpdate(idx, { ...q, status: SurveyQuestionStatus.NO })}>
                                No
                            </AnswerButton>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}

export default QuestionTable

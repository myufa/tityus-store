import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../../../components/common/flex'
import SellMenu from '../../../components/home/sell-menu'
import HomeButtonHeader from '../../../components/common/home-button-header'
import Survey from '../../../components/survey'
import { Organ } from '../../../store'

const SurveyPage = () => {
    const router = useRouter()
    const { organ, bookmark } = router.query
    const bookmarkNumber = +(bookmark || '6')
    const bookmarkValue = !isNaN(bookmarkNumber) ? bookmarkNumber : 6
    return (
        <>
            {/* <h1>{organ}</h1>
            <h1>{bookmark}</h1> */}
            <Survey organ={organ as Organ} bookmark={bookmarkValue} />
        </>
    )
}

export default SurveyPage

import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import type { UserInfo } from 'store'
import useStore from 'store'
import HomeButtonHeader from 'components/common/home-button-header'
import SurveyButton from 'components/survey/survey-button'

const range = (start: number, stop?: number, order?: number) => {
    if (stop !== undefined && stop <= start) {
        return []
    }
    const beginning = stop ? start : 0
    const end = stop ? stop : start
    const result = Array.from(Array(end + 1).keys()).slice(beginning)
    if (order === -1) {
        result.reverse()
    }
    return result
}

const genderOpts = [
    'Male', 'Female', 'None-Binary', 'Transgender', 'Intersex', 'I Prefer Not To Say'
]

const raceOpts = [
    'American Indian or Alaska Native', 'Asian', 'Native Hawaiian or Other Pacific Islander',
    'Black or African American', 'White', 'Other Race', 'Unknown'
]

const ethnicityOpts = [
    'Hispanic or Latino', 'Not Hispanic or Latino', 'Unknown Ethnicity'
]

const months: { [month: string]: number } = {
    January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31,
    September: 30, October: 31, November: 30, December: 31
}

const bloodTypeOpts = ['A+', 'A-',  'B+', 'B-',  'O+', 'O-',  'AB+', 'AB-']

const Heading = styled.h1`
    color: #FAFAFB;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 37px;
`

type FieldProps = { widthPct?: number }
const Field = styled(Flex)<FieldProps>`
    width: ${({ widthPct }) => widthPct}%;
`
const FieldLabel = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FAFAFB;
    margin-bottom: 4px;
    margin-top: 15px;
`

const FieldInput = styled.input<FieldProps>`
    height: 40px;
    width: ${({ widthPct }) => widthPct}%;
    margin-bottom: 0;
    background: linear-gradient(180deg, #222222 99.99%, rgba(125, 131, 150, 0) 100%);
    border-radius: 5px;
    border-color: transparent;
    color: #FAFAFB;
    &::placeholder{
        color: #666666
    }
`

const FieldSelect = styled.select<FieldProps>`
    height: 40px;
    width: ${({ widthPct }) => widthPct}%;
    margin-bottom: 0;
    background: linear-gradient(180deg, #222222 99.99%, rgba(125, 131, 150, 0) 100%);
    border-radius: 5px;
    border-color: transparent;
    color: #FAFAFB;
    overflow-y: scroll;
    &.unselected {
        color: grey
    }
    option[value=""][disabled] {
        color: gray;
    }
}
`

const Sell: NextPage = () => {
    const [sellState, setSellState] = useState<UserInfo>({})
    const updateUserInfo = useStore(state => state.updateUserInfo)
    const organForSale = useStore(state => state.organForSale)
    const userInfo = useStore(state => state.userInfo)

    const router = useRouter()

    const updateState = (key: keyof UserInfo, value: any) => {
        const newSellState = Object.assign(sellState, {[key]: value})
        setSellState({...newSellState})
    }

    const inputOnChange = (key: keyof UserInfo) => {
        const updateFunc = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            updateState(key, e.currentTarget.value || undefined)
        }
        return updateFunc
    }

    const onSubmit = () => {
        updateUserInfo(sellState)
        router.push(`sell/${organForSale || ''}`)
    }

    return (
        <Flex column height={660}>
            <HomeButtonHeader />
            <Flex column center>
                <Flex column>
                    <Flex justifyContent='space-between' width={850}>
                        <Flex column width={400} justifyContent='end'>
                            <Flex>
                                <Heading>Set up your profile.</Heading>
                            </Flex>
                            <Flex>
                                <Field column>
                                    <FieldLabel>Name</FieldLabel>
                                    <Flex justifyContent='space-between'>
                                        <FieldInput value={sellState['firstName'] || ''} onChange={inputOnChange('firstName')} widthPct={32} placeholder='First Name' />
                                        <FieldInput value={sellState['middleName'] || ''} onChange={inputOnChange('middleName')} widthPct={32} placeholder='Middle Name' />
                                        <FieldInput value={sellState['lastName'] || ''} onChange={inputOnChange('lastName')} widthPct={32} placeholder='Last Name' />
                                    </Flex>
                                </Field>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                <Field column widthPct={24}>
                                    <FieldLabel>Age</FieldLabel>
                                    <FieldSelect
                                        value={sellState['age'] || ''}
                                        onChange={inputOnChange('age')}
                                        className={sellState['age'] ? 'age' : 'unselected'}>
                                        <option value='' disabled selected>Age</option>
                                        {range(1,121).map(age => <option value={age} key={age}>{age}</option>)}
                                    </FieldSelect>
                                </Field>
                                <Field column widthPct={24}>
                                    <FieldLabel>Gender</FieldLabel>
                                    <FieldSelect
                                        value={sellState['gender'] || ''}
                                        onChange={inputOnChange('gender')}
                                        className={sellState['gender'] ? 'gender' : 'unselected'}>
                                        <option value='' disabled selected>Gender</option>
                                        {genderOpts.map((gender, i) => <option value={gender} key={i}>{gender}</option>)}
                                    </FieldSelect>
                                </Field>
                                <Field column widthPct={24}>
                                    <FieldLabel>Race</FieldLabel>
                                    <FieldSelect
                                        value={sellState['race'] || ''}
                                        onChange={inputOnChange('race')}
                                        className={sellState['race'] ? 'race' : 'unselected'}>
                                        <option value='' disabled selected>Race</option>
                                        {raceOpts.map((race, i) => <option value={race} key={i}>{race}</option>)}
                                    </FieldSelect>
                                </Field>
                                <Field column widthPct={24}>
                                    <FieldLabel>Ethnicity</FieldLabel>
                                    <FieldSelect
                                        value={sellState['ethnicity'] || ''}
                                        onChange={inputOnChange('ethnicity')}
                                        className={sellState['ethnicity'] ? 'ethnicity' : 'unselected'}>
                                        <option value='' disabled selected>Ethnicity</option>
                                        {ethnicityOpts.map((ethnicity, i) => <option value={ethnicity} key={i}>{ethnicity}</option>)}
                                    </FieldSelect>
                                </Field>
                            </Flex>
                            <Flex>
                                <Field column width={400}>
                                    <FieldLabel>Date of Birth</FieldLabel>
                                    <Flex justifyContent='space-between'>
                                        <FieldSelect
                                            value={sellState['mob'] || ''}
                                            onChange={inputOnChange('mob')}
                                            widthPct={32}
                                            className={sellState['mob'] ? 'mob' : 'unselected'}>
                                            <option value='' disabled selected>Month</option>
                                            {Object.keys(months).map(month => <option value={month} key={month}>{month}</option>)}
                                        </FieldSelect>
                                        <FieldSelect
                                            value={sellState['dob'] || ''}
                                            onChange={inputOnChange('dob')}
                                            widthPct={32}
                                            className={sellState['dob'] ? 'dob' : 'unselected'}>
                                            <option value='' disabled selected>Day</option>
                                            {range(1, months[sellState['mob'] || ''] || 0).map(dob => <option value={dob} key={dob}>{dob}</option>)}
                                        </FieldSelect>
                                        <FieldSelect
                                            value={sellState['yob'] || ''}
                                            onChange={inputOnChange('yob')}
                                            widthPct={32}
                                            className={sellState['yob'] ? 'yob' : 'unselected'}>
                                            <option value='' disabled selected>Year</option>
                                            {range(1900,2021,-1).map(yob => <option value={yob} key={yob}>{yob}</option>)}
                                        </FieldSelect>
                                    </Flex>
                                </Field>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                <Field column widthPct={32}>
                                    <FieldLabel>Height</FieldLabel>
                                    <FieldInput placeholder='Ft' value={sellState['height'] || ''} onChange={inputOnChange('height')} />
                                </Field>
                                <Field column widthPct={32}>
                                    <FieldLabel>Weight</FieldLabel>
                                    <FieldInput placeholder='Lbs' value={sellState['weight'] || ''} onChange={inputOnChange('weight')} />
                                </Field>
                                <Field column widthPct={32}>
                                    <FieldLabel>Blood Type</FieldLabel>
                                    <FieldSelect
                                        value={sellState['bloodType'] || ''}
                                        onChange={inputOnChange('bloodType')}
                                        widthPct={100}
                                        className={sellState['bloodType'] ? 'bloodType' : 'unselected'}>
                                        <option value='' disabled selected>Blood Type</option>
                                        {bloodTypeOpts.map(bloodType => <option value={bloodType} key={bloodType}>{bloodType}</option>)}
                                    </FieldSelect>
                                </Field>
                            </Flex>
                            <Flex>
                                <Field column widthPct={100}>
                                    <FieldLabel>Occupation</FieldLabel>
                                    <Flex>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='(Optional)'
                                            value={sellState['occupation'] || ''}
                                            onChange={inputOnChange('occupation')} />
                                    </Flex>
                                </Field>
                            </Flex>
                        </Flex>
                        <Flex column width={400} justifyContent='space-between'>
                            <Flex>
                                <Field column widthPct={100}>
                                    <FieldLabel>Contact</FieldLabel>
                                    <Flex>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='Phone Number'
                                            value={sellState['phoneNumber'] || ''}
                                            onChange={inputOnChange('phoneNumber')} />
                                    </Flex>
                                    <Flex marginTop={10}>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='Email Address'
                                            value={sellState['emailAddress'] || ''}
                                            onChange={inputOnChange('emailAddress')} />
                                    </Flex>
                                </Field>
                            </Flex>
                            <Flex>
                                <Field column widthPct={100}>
                                    <FieldLabel>Address</FieldLabel>
                                    <Flex>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='Address Line 1'
                                            value={sellState['addr1'] || ''}
                                            onChange={inputOnChange('addr1')} />
                                    </Flex>
                                    <Flex marginTop={10}>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='Address Line 2'
                                            value={sellState['addr2'] || ''}
                                            onChange={inputOnChange('addr2')} />
                                    </Flex>
                                    <Flex marginTop={10} justifyContent='space-between'>
                                        <FieldInput
                                            widthPct={42}
                                            placeholder='City'
                                            value={sellState['city'] || ''}
                                            onChange={inputOnChange('city')} />
                                        <FieldInput
                                            widthPct={35}
                                            placeholder='State'
                                            value={sellState['state'] || ''}
                                            onChange={inputOnChange('state')} />
                                        <FieldInput
                                            widthPct={20}
                                            placeholder='ZIP Code'
                                            value={sellState['zip'] || ''}
                                            onChange={inputOnChange('zip')} />
                                    </Flex>
                                </Field>
                            </Flex>
                            <Flex>
                                <Field column widthPct={100}>
                                    <FieldLabel>Emergency Contact</FieldLabel>
                                    <Flex justifyContent='space-between'>
                                        <FieldInput
                                            widthPct={32}
                                            placeholder='First name'
                                            value={sellState['ecFirstName'] || ''}
                                            onChange={inputOnChange('ecFirstName')} />
                                        <FieldInput
                                            widthPct={32}
                                            placeholder='Middle name'
                                            value={sellState['ecMiddleName'] || ''}
                                            onChange={inputOnChange('ecMiddleName')} />
                                        <FieldInput
                                            widthPct={32}
                                            placeholder='Last name'
                                            value={sellState['ecLastName'] || ''}
                                            onChange={inputOnChange('ecLastName')} />
                                    </Flex>
                                    <Flex marginTop={10}>
                                        <FieldInput
                                            widthPct={100}
                                            placeholder='Phone Number'
                                            value={sellState['ecPhoneNumber'] || ''}
                                            onChange={inputOnChange('ecPhoneNumber')} />
                                    </Flex>
                                </Field>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex paddingTop={40}>
                        <SurveyButton onClick={onSubmit}>
                            Continue
                        </SurveyButton>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sell

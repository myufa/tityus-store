import styled from 'styled-components'

const SurveyButton = styled.button`
    background-color: #121318;
    transition: all 0.3s ease-out;
    color: white;
    font-family: 'Poppins';
    font-size: 16px;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
    &:hover {
        background-color: #BD4141;
        border-color: #BD4141;
    }
`

export default SurveyButton

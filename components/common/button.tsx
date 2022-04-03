import styled from "styled-components"

type ButtonProps = { width?: number, height?: number, widthPct?: number, heightPct?: number  }
const Button = styled.button<ButtonProps>`
    ${({ width }) => `width: ${width}px`};
    ${({ height }) => `height: ${height}px`};
    ${({ widthPct }) => `width: ${widthPct}%`};
    ${({ heightPct }) => `height: ${heightPct}%`};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    background-color: #BD4141;
    cursor: pointer;
    padding: 0px;
`

export default Button

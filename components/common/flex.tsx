import styled, { css } from 'styled-components'

type AlignItemsOpts = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' |
                      'stretch' | 'normal' | 'inherit' | 'unset'
type JustifyContentOpts = AlignItemsOpts | 'left' | 'right' | 'space-between' |
                          'space-around' | 'space-evenly'
interface FlexProps {
    direction?: 'row' | 'column',
    row?: boolean,
    column?: boolean,
    alignItems?: AlignItemsOpts,
    justifyContent?: JustifyContentOpts,
    center?: boolean,
    debug?: boolean,
    pad?: boolean,
    padding?: number,
    paddingTop?: number,
    paddingRight?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    margin?: number,
    marginTop?: number,
    marginRight?: number,
    marginBottom?: number,
    marginLeft?: number,
    scroll?: boolean,
    fullHeight?: boolean,
    fullWidth?: boolean,
    height?: number,
    width?: number,
    heightPct?: number,
    widthPct?: number;
    flex?: boolean,
    pointer?: boolean,
    hidden?: boolean
}
const Flex = styled.div<FlexProps>`
    display: flex;
    ${props => props.direction && css`
        flex-direction: ${props.direction};
    `}
    ${props => props.row && css`
        flex-direction: row;
    `}
    ${props => props.column && css`
        flex-direction: column;
    `}
    ${props => props.alignItems && css`
        align-items: ${props.alignItems};
    `}
    ${props => props.justifyContent && css`
        justify-content: ${props.justifyContent};
    `}
    ${props => props.center && css`
        align-items: center;
        justify-content: center;
    `}
    ${props => props.debug && css`
        border: 3px solid red;
    `}
    ${props => props.pad && css`
        padding: 10px;
    `}
    ${props => props.padding && css`
        padding: ${props.padding}px;
    `}
    ${props => props.paddingTop && css`
        padding-top: ${props.paddingTop}px;
    `}
    ${props => props.paddingRight && css`
        padding-right: ${props.paddingRight}px;
    `}
    ${props => props.paddingBottom && css`
        padding-bottom: ${props.paddingBottom}px;
    `}
    ${props => props.paddingLeft && css`
        padding-left: ${props.paddingLeft}px;
    `}
    ${props => props.margin && css`
        margin: ${props.margin}px;
    `}
    ${props => props.marginTop && css`
        margin-top: ${props.marginTop}px;
    `}
    ${props => props.marginRight && css`
        margin-right: ${props.marginRight}px;
    `}
    ${props => props.marginBottom && css`
        margin-bottom: ${props.marginBottom}px;
    `}
    ${props => props.marginLeft && css`
        margin-left: ${props.marginLeft}px;
    `}
    ${props => props.scroll && css`
        overflow: auto;
    `}
    ${props => props.fullHeight && css`
        height: 100%;
    `}
    ${props => props.fullWidth && css`
        width: 100%;
    `}
    ${props => props.height && css`
        height: ${props.height}px;
    `}
    ${props => props.width && css`
        width: ${props.width}px;
    `}
    ${props => props.widthPct && css`
        width: ${props.widthPct}%;
    `}
    ${props => props.heightPct && css`
        height: ${props.heightPct}%;
    `}
    ${props => props.flex && css`
        flex: 1;
    `}
    ${props => props.pointer && css`
        cursor: pointer;
    `}
    ${props => props.hidden && css`
        display: None;
    `}
`

export default Flex

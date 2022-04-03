import Image from 'next/image'
import styled, { css } from 'styled-components'


type ImageSizeProps = { width?: number, widthPct?: number, height: number, fill?: string }
const ImageConatainer = styled.div<ImageSizeProps>`
    position: relative;
    width: ${({ width, widthPct }) => widthPct || `${width}px`};
    height: ${({ height }) => height}px;
    ${({ fill }) => fill && css`
        color: ${fill};
    `}
`

type SizedImageProps = ImageSizeProps & {
    src: string | StaticImageData, alt: string, scale?: number, fill?: string, onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const SizedImage = ({ width, widthPct, height, src, alt, scale, fill, onClick }: SizedImageProps) => {
    return (
        <ImageConatainer
            width={width && (width * (scale || 1))}
            widthPct={widthPct}
            height={height * (scale || 1)}
            fill={fill}
            onClick={onClick}>
            <Image src={src} alt={alt} layout='fill'/>
        </ImageConatainer>
    )
}

export default SizedImage

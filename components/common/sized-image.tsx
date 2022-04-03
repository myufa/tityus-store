import Image from 'next/image'
import styled from 'styled-components'


type ImageSizeProps = { width?: number, widthPct?: number, height: number }
const ImageConatainer = styled.div<ImageSizeProps>`
    position: relative;
    width: ${({ width, widthPct }) => widthPct || `${width}px`};
    height: ${({ height }) => height}px;
`

type SizedImageProps = ImageSizeProps & {
    src: string | StaticImageData, alt: string, scale?: number, onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const SizedImage = ({ width, widthPct, height, src, alt, scale, onClick }: SizedImageProps) => {
    return (
        <ImageConatainer width={width && (width * (scale || 1))} widthPct={widthPct} height={height * (scale || 1)} onClick={onClick}>
            <Image src={src} alt={alt} layout='fill'/>
        </ImageConatainer>
    )
}

export default SizedImage

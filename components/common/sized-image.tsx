import Image from 'next/image'
import styled from 'styled-components'


type ImageSizeProps = { width: number, height: number }
const ImageConatainer = styled.div<ImageSizeProps>`
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`

type SizedImageProps = ImageSizeProps & { src: string | StaticImageData, alt: string, scale?: number}
const SizedImage = ({ width, height, src, alt, scale }: SizedImageProps) => {
    return (
        <ImageConatainer width={width * (scale || 1)} height={height * (scale || 1)}>
            <Image src={src} alt={alt} layout='fill'/>
        </ImageConatainer>
    )
}

export default SizedImage

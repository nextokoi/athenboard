import dynamic from 'next/dynamic'

const DynamicCarousel = dynamic(() => import('./carousel'),
    { ssr: false }
)

type Props = {
    images: string[]
}

export const DynamicCarouselComponent = ({ images }: Props) => {
    return (
        <DynamicCarousel images={images} />
    )
}
"use client"

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules"
import { register } from 'swiper/element/bundle'

register()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './carousel.module.css'


type Props = {
  images: string[]
}

export const CarouselComponent = ({ images }: Props) => {
  const renderItemCarousel = () => {
    return images.map((image, index) => {
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <swiper-slide key={index}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`slider-${index}`}
              className={styles.image}
              height={960}
              width={640}
            />
          </div>
        </swiper-slide>
      )
    })
  }
  return (
    <swiper-container
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation, Pagination]}
      className={styles.carousel}
    >
      {renderItemCarousel()}
    </swiper-container>
  )
}

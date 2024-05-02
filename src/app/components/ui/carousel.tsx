"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


type Props = {
  data: string[]
}

export const CarouselComponent = ({ data }: Props) => {
  const renderItemCarousel = () => {
    return data.map((image, index) => {
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <SwiperSlide key={index}>
          <div className="flex w-full items-center justify-center">
            <Image
              src={image}
              alt={`slider-${index}`}
              className="object-cover object-center lg:w-1/4 w-2/3 h-96"
              height={960}
              width={640}
            />
          </div>
        </SwiperSlide>
      )
    })
  }
  return (
    <Swiper
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation, Pagination]}
      className="w-full text-white bg-[#cecece]"
      loop
    >
      {renderItemCarousel()}
    </Swiper>
  )
}

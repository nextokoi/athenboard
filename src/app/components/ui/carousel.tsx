"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import slide1 from '../../../../public/pottery.webp'
import slide2 from '../../../../public/pottery-2.jpg'
import slide3 from '../../../../public/pottery-3.jpg'

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} indicatorsType="bar" slide={false} className="text-white w-full h-96 sm:h-96 bg-[#cecece]">
      <Image src={slide1} alt="slider-1" className="object-cover object-center sm:w-fit"/>
      <Image src={slide2} alt="slider-2" className="object-cover object-center sm:w-fit"/>
      <Image src={slide3} alt="slider-3" className="object-cover object-center sm:w-fit"/>
    </Carousel>
  )
}

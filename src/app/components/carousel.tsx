"use client";
import Image from "next/image";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} indicatorsType="bar" slide={false} className="text-white w-80 h-96">
      <Image src="/pottery.webp" alt="slider-2" width={640} height={960}/>
      <Image src="/pottery-2.jpg" alt="slider-3" width={640} height={960}/>
      <Image src="/pottery-3.jpg" alt="slider-3" width={640} height={960}/>
    </Carousel>
  )
}

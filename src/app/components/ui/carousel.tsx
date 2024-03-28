/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <div className="flex justify-center">
      <Carousel slideInterval={5000} showControls={true} indicators={true} indicatorsType="bar" slide={false} className="text-white w-full h-96 sm:h-96 bg-[#cecece]">
        <img src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/sign/user_images/pottery.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyX2ltYWdlcy9wb3R0ZXJ5LndlYnAiLCJpYXQiOjE3MTE2MzEyOTEsImV4cCI6MzE3MDQwMDk1MjkxfQ.CgN72U3u11GSdKQS_dw-wIwCn_N0oL3j34poGRn2Ck4&t=2024-03-28T13%3A08%3A11.309Z" alt="slider-1" className="object-cover object-center sm:w-fit"/>
        <img src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/pottery-2.webp?t=2024-03-28T14%3A43%3A37.906Z" alt="slider-2" className="object-cover object-center sm:w-fit"/>
        <img src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/pottery-3.webp?t=2024-03-28T14%3A44%3A54.321Z" alt="slider-3" className="object-cover object-center sm:w-fit"/>
      </Carousel>
    </div>
  )
}

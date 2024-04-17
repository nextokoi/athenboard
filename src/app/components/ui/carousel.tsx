import { Carousel } from "keep-react";
import Image from "next/image";

type Props = {
  data: string
}

export const CarouselComponent = async ({ data } : Props) => {
  return (
    <div className="flex justify-center">
      <Carousel slideInterval={5000} showControls={true} indicators={true} indicatorsType="bar" slide={false} className="text-white w-full h-96 sm:h-96 bg-[#cecece]">
        <Image src={data} alt="slider-1" className="object-cover object-center sm:w-fit" height={960} width={640}/>
      </Carousel>
    </div>
  )
}
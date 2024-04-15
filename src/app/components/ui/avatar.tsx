import Image from "next/image"

type Props = {
  image?: string
}

export const AvatarComponent = ({ image }: Props) => {
  return (
    <div className="relative rounded-full h-20 w-20 overflow-hidden object-center object-cover">
      {image && (
        <Image src={image} alt="avatar" height={960} width={640}/>
      )}
    </div>
  )
}

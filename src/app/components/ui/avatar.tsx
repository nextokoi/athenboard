import Image from "next/image"

type Props = {
  image?: string
}

export const AvatarComponent = ({ image }: Props) => {
  const firstImageUrl = Array.isArray(image) ? image[0] : image
  return (
    <div className="rounded-full h-20 w-20 overflow-hidden object-center object-cover">
      {firstImageUrl && (
        <Image src={firstImageUrl} alt="avatar" height={960} width={640}/>
      )}
    </div>
  )
}

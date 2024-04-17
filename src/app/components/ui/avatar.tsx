import Image from "next/image"

type Props = {
  image?: string
}

export const AvatarComponent = ({ image }: Props) => {
  const firstImageUrl = image && image.length > 0 ? image[0] : undefined
  return (
    <div className="relative rounded-full h-20 w-20 overflow-hidden object-center object-cover">
      {firstImageUrl && (
        <Image src={firstImageUrl} alt="avatar" height={960} width={640}/>
      )}
    </div>
  )
}

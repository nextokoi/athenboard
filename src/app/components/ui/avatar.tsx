import { Avatar } from "antd"

type Props = {
  image?: string
}

export const AvatarComponent = ({ image }: Props) => {
  const firstImageUrl = Array.isArray(image) ? image[0] : image
  return (
    <Avatar src={firstImageUrl} alt="avatar" size={80} shape="circle" />
  )
}

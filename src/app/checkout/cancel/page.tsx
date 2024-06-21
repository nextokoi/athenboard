import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <h1 className="text-3xl">Checkout Cancelled</h1>
      <Image src={'https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/cancel.svg'} alt="cancel" width={600} height={300} />
      <Link href='/experiences'><Button size="large">Return Experiences</Button></Link>
    </div>
  )
}
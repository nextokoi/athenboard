import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  if (!searchParams?.valid) {
    redirect('/')
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <h1 className="text-3xl">Checkout Success</h1>
      <Image src={'https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/info_images/success.svg'} alt="success" width={600} height={300} />
      <Link href='/experiences'><Button size="large">Return Experiences</Button></Link>
    </div>
  )
}
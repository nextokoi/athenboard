import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <h1 className="text-3xl text-balance text-center">Something went wrong, please try again</h1>
      <Image src={'https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/info_images/error.svg'} alt="error" width={600} height={300} />
      <Link href='/experiences'><Button size="large">Return Home</Button></Link>
    </div>
  );
}

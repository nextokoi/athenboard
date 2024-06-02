import { Button, Dropdown } from "keep-react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function ProfileDropdown() {
  return (
    <Dropdown action={
        <Button className='bg-transparent hover:bg-transparent text-white p-0'>
            <FaUserCircle className="text-2xl" />
        </Button>
    } actionClassName='border-none bg-transparent p-0' className='w-44'>
        <Dropdown.List>
            <Dropdown.Item href="/profile">
                <FaUserCircle className="text-xl" />
                Profile
            </Dropdown.Item>
            <Dropdown.Item>
                <RiLogoutBoxLine className="text-xl" />
                Log out
            </Dropdown.Item>
        </Dropdown.List>
    </Dropdown>
  )
}

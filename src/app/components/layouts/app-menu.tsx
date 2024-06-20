import { Menu, type MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const AppMenu = ({ isVertical = false, onCloseMenu }: { isVertical?: boolean, onCloseMenu?: () => void }) => {

  const items: MenuItem[] = [
    {
      label: <Link href="/" onClick={onCloseMenu}>Home</Link>,
      key: "Home",
      style: {
        color: isVertical ? "#333" : "#fff",
      },
    },
    {
      label: <Link href="/experiences" onClick={onCloseMenu}>Experiences</Link>,
      key: "experiences",
      style: {
        color: isVertical ? "#333" : "#fff",
      },
    },
    {
      label: "About us",
      key: "About us",
      style: {
        color: isVertical ? "#333" : "#fff",
      },
    },
  ];

  const style = isVertical ? {border: "none"} : { border: "none", display: "flex", alignItems: "center"}

  return (
    <>
      <Menu
        mode={isVertical ? "vertical" : "horizontal"}
        items={items}
        className={!isVertical ? "bg-[#006876] w-full" : ""}
        style={ style }
        selectable={false}
      />
    </>
  );
};
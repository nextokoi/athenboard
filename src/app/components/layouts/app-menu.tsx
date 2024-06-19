import { Menu, type MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const AppMenu = ({ isVertical = false }: { isVertical?: boolean }) => {
    
    const items: MenuItem[] = [
      {
        label: "Home",
        key: "Home",
        style: {
          color: isVertical ? "#333" : "#fff",
        },
      },
      {
        label: "Experiences",
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
  
    return (
      <>
        <Menu
          mode={isVertical ? "vertical" : "horizontal"}
          items={items}
          className={!isVertical ? "bg-[#006876]" : ""}
          style={{ border: "none" }}
        />
      </>
    );
  };
"use client"

import { FaHouse, FaPalette } from "react-icons/fa6";
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Home',
    key: 'Home',
    icon: <FaHouse />,
  },
  {
    label: 'Experiences',
    key: 'experiences',
    icon: <FaPalette />,
  },
  {
    label: 'About us',
    key: 'About us',
    icon: <SettingOutlined />
  }
]

export const NewNavbar = () => {

  return <Menu mode="horizontal" items={items} />;
};
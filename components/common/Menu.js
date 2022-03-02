import React from 'react'
import {Menu} from 'antd';
import {MailOutLined, AppstoreOutlined, SettingsOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

export const Navbar = () => {
  return(
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutLined/>}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="mail" icon={<AppstoreOutlined/>}>
        Navigation One
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingsOutlined/>} title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href=''/> Navigation Four - Link
      </Menu.Item>
    </Menu>
  );
}

import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function navbar() {
  return (
    <>
      <Header>
        <div className="Logo">
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="1">Nav 2</Menu.Item>
          <Menu.Item key="1">Nav 3</Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

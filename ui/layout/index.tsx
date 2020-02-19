import React from 'react';
import {Layout, Menu} from 'antd';
import { LoginStatus } from '../components/loginStatus';
import './index.scss';

const { Header, Content, Sider, Footer } = Layout;

export default function LayoutCom(props: { children: React.ReactNode; }) {

  return (
    <Layout>
      <Header className="layout-header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">代码</Menu.Item>
          <Menu.Item key="2">模版</Menu.Item>
          <Menu.Item key="3">产品</Menu.Item>
          <Menu.Item key="3">教程</Menu.Item>
        </Menu>
        <LoginStatus></LoginStatus>
      </Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
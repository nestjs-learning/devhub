import React from 'react';
import {Layout} from 'antd';

const { Header, Content, Sider, Footer } = Layout;

export default function LayoutCom(props: { children: React.ReactNode; }) {

  return (
    <Layout>
      <Header>Header</Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
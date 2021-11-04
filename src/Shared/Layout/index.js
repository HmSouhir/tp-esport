import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "./Header";
import './styles.css'

const { Content } = Layout;

const Container = (WrappedComponent) => (props) =>
  (
    <Layout>
      <Header />
      <Content className="content_container">
        <Row type="flex" justify="center" className="container__antd">
          <Col span={24}>
            <WrappedComponent {...props} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );

export default Container;

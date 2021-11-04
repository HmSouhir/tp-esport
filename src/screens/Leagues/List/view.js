import React from "react";
import { Table, Row, Col, Avatar, Divider } from "antd";
import className from "classnames";
import Pagination from "../../../Shared/Pagination";
import Loading from "../../../Shared/Loading";
import Unknown from "../../../Shared/Unknown";
import { isEvenNumber } from "../../../utils/helpers";

const columns = [
  {
    title: "Logo",
    dataIndex: "image_url",
    key: "image_url",
    render: (src) => <Avatar src={src} size={100} />,
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <h2>{text}</h2>,
  },
];

const View = ({ onShow, leaguesQuery, onPageChange, page }) => {
  const { idle, errors, loading, data, totalItems } = leaguesQuery;

  if (idle) return <div />;
  if (errors) return <Unknown />;
  if (loading) return <Loading />;

  return (
    <Row justify="center">
      <Col span={24}>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: "3rem"}}>Leagues</h1>
        <Divider />
        <Table
          onRow={(record) => {
            return {
              onClick: () => onShow(record.id),
            };
          }}
          rowKey="id"
          columns={columns}
          rowClassName={(_, index) =>
            className({
              "table-row-dark": isEvenNumber(index),
              "table-row-light": !isEvenNumber(index),
            })
          }
          showHeader={false}
          dataSource={data}
          pagination={false}
        />
        <div className="p-top-10 text-center">
          <Pagination
            current={page}
            onPageChange={onPageChange}
            total={totalItems}
          />
        </div>
      </Col>
    </Row>
  );
};

export default View;

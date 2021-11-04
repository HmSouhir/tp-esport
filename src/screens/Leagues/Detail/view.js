import React from "react";
import { Card, Row, Col, Button } from "antd";
import get from "lodash/get";
import isNil from "lodash/isNil";
import moment from "moment";
import { DATE_FORMAT } from "../../../utils/constants";

import Loading from "../../../Shared/Loading";
import Unknown from "../../../Shared/Unknown";

const { Meta } = Card;

const Description = ({ series, onClickWinner }) => {
  return series.map(({ id, full_name, begin_at, end_at, winner_id }) => (
    <div key={id}>
      <h4>{full_name}</h4>
      <p>
        From : {moment(begin_at).format(DATE_FORMAT)} - To :
        {moment(end_at).format(DATE_FORMAT)}
      </p>
      {!isNil(winner_id) && (
        <Button type="primary" onClick={() => onClickWinner(winner_id)}>
          WINNER
        </Button>
      )}
    </div>
  ));
};

const View = ({ leagueQuery, onClickWinner }) => {
  const { idle, errors, loading, data } = leagueQuery;

  if (idle) return <div />;
  if (errors) return <Unknown />;
  if (loading) return <Loading />;

  return (
    <div className="container__antd">
      <Row justify="center">
        <Col>
          <Card
            title={<h1 className="text-center">{get(data, "name", "")}</h1>}
            hoverable
            style={{ width: 600 }}
            cover={
              <img alt={get(data, "id", "")} src={get(data, "image_url", "")} />
            }
          >
            <Meta
              title={`Game : ${get(data, "videogame.name")}`}
              description={
                <Description
                  series={get(data, "series", [])}
                  onClickWinner={onClickWinner}
                />
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default View;

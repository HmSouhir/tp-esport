import React from "react";
import { Row, Col, Card } from "antd";
import get from "lodash/get";
import faker from "faker";
import { IoGameController } from "react-icons/io5";

import Loading from "../../../Shared/Loading";
import Unknown from "../../../Shared/Unknown";

const View = ({ teamQuery }) => {
  const { idle, errors, loading, data } = teamQuery;

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
              <img
                alt={get(data, "id", "")}
                src={
                  get(data, "image_url", null)
                    ? get(data, "image_url")
                    : faker.image.business()
                }
              />
            }
          >
            <h2 className="text-center">
              Game : {get(data, "current_videogame.name")}
            </h2>
            <IoGameController size={30} />
            <Row justify="space-between">
              {get(data, "players", []).map((player) => (
                <Col key={`${player.id}-${player.name}`}>
                  <h1>{player.name}</h1>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default View;

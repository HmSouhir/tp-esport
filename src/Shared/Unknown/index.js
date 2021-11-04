import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Divider, Card } from "antd";

import "./style.css";
import { PATHS } from "../../utils/constants";

const Unknown = () => {
  const { push } = useHistory();
  return (
    <Row type="flex" justify="center" align="middle">
      <Col className="error_container" xs={22} sm={22} md={12} lg={12} xl={12}>
        <Card
          title={<div className="error_title">Unknown Error</div>}
          children={
            <div type="flex" justify="center" align="middle">
              Please contact the administrator.
              <Divider />
              <Button
                type="link"
                onClick={() => push(PATHS.HOME)}
                className="error_go_back"
              >
                GO BACK
              </Button>
            </div>
          }
        />
      </Col>
    </Row>
  );
};

export default Unknown;

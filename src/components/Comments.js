import { Card, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";

import React from "react";

export default function (props) {
  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col md="6" style={{ margin: "1%" }}>
        <Card body>
          <CardHeader>{props.name}</CardHeader>
          <CardTitle tag="h5">{props.email}</CardTitle>
          <CardText>{props.body}</CardText>
        </Card>
      </Col>
    </Row>
  );
}

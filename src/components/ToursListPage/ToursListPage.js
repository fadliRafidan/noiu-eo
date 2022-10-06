import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToursListLeft from "./ToursListLeft";
import ToursListRight from "./ToursListRight";

const ToursListPage = () => {
  return (
    <section className="tours-list">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <ToursListRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ToursListPage;

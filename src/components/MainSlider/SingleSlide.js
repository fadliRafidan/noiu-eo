import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = (props) => {

  

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(https://api.noiu-eo.com/${props?.image})`,
        }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <div className="swiper-slide-inner">
          <Row>
            <Col xl={12}>
              <h2>{props?.title}</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;

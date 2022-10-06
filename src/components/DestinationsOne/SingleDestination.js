import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, price, _id, col } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={`https://api.noiu-eo.com/${image}`}
            alt=""
          />
          <div className="destinations-one__content">
              {/* <p className="destinations-one__sub-title">{body}</p> */}
            <h2 className="destinations-one__title">
              <Link href={`/tour-detail/${_id}`}>{title}</Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href={`/tour-detail/${_id}`}>Mulai dari {price}</a>
          </div>
         
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;

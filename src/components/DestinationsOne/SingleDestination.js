import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, price, _id, col } = destination;
  const lazyRoot = React.useRef(null)
  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image lazyRoot={lazyRoot}
            src={`https://api.noiu-eo.com/${image}`}
            alt="image" layout='fill'
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

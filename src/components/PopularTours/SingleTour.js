import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, _id, body, price } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={`https://api.noiu-eo.com/${image}`}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href={`/tour-detail/${_id}`}>
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {body} 
          </div>
          <h3 className="popular-tours__title">
            <Link href={`/tour-detail/${_id}`}>{title}</Link>
          </h3>
          <p className="popular-tours__rate">
           StartFrom <span>{price}</span> per orang
          </p>
          <ul className="popular-tours__meta list-unstyled">
          
                <Link href={`/tour-detail/${_id}`}>Lihat</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;

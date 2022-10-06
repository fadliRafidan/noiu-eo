import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image ,title }) => {
  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={`https://api.noiu-eo.com/${image}`} alt="" />
        <div className="gallery-one__iocn">
          <a href={`@/images/gallery/${image}`}>
           <p>{title}</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SingleGallery;

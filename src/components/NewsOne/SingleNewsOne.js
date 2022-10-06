import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import moment from 'moment'
const SingleNewsOne = ({ news = {}, newsTwo = false }) => {
  const { image, title, author, comments, createdAt, _id } = news;

  return (
    <div
      className={
        newsTwo ? "news-one__single animated fadeInUp" : "news-one__single"
      }
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="news-one__img">
        <Image src={`https://api.noiu-eo.com/${image}`} alt="" />
        <Link href={`/news-detail/${_id}`}>
          <a>
            <span className="news-one__plus"></span>
          </a>
        </Link>
        <div className="news-one__date">
          <p>
          {moment(createdAt).format('ll')}
          </p>
        </div>
      </div>
      <div className="news-one__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href={`/news-detail/${_id}`}>
              <a>
                <i className="far fa-user-circle"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/news-detail/${_id}`}>
              <a>
                <i className="far fa-comments"></i>
                {comments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-one__title">
          <Link href={`/news-detail/${_id}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleNewsOne;

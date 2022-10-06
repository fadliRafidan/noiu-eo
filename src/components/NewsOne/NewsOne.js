import newsOne from "@/data/newsOne";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "./SingleNewsOne";
import axios from 'axios'
const { tagline, title, newsData } = newsOne;

const NewsOne = () => {

  const [data, setData] = useState("")

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/blog/posts?page=1&perPage=6')
    .then(result=>{
      // console.log("data api", result.data);
      setData(result.data.data)
      // console.log(result.data.data);
    })
    .catch(err=>{
      console.log("error", err);
    })
  }
    
  
  useEffect(()=>{
    getBlog()
   
  },[])
  return (
    <section className="news-one">
      <Container>
        <div className="news-one__top">
          <Row>
            <Col xl={9} lg={9}>
              <div className="news-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3}>
              <div className="news-one__top-right">
                <Link href="/news">
                  <a className="news-one__btn thm-btn">View All posts</a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="news-one__bottom">
          <Row>
            {data &&data.map((row) => (
              <Col key={row._id} xl={4} lg={4}  className="animated fadeInUp">
                <SingleNewsOne news={row} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewsOne;

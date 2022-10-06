import popularToursTwo from "@/data/popularToursTwo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import axios from 'axios'
const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {

  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/paket-wisata/posts?page=1&perPage=999')
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
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {data&&data.map((row) => (
            <Col
              key={row._id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <div>
      <div
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={`https://api.noiu-eo.com/${row.image}`}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href={`/tour-detail/${row._id}`}>
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            {/* <i className="fa fa-star"></i> {row.body}  */}
          </div>
          <h3 className="popular-tours__title">
            <Link href={`/tour-detail/${row._id}`}>{row.title}</Link>
          </h3>
          <p className="popular-tours__rate">
           StartFrom <span>   {row.price}</span>/per orang
          </p>
          <ul className="popular-tours__meta list-unstyled">
          
                <Link href={`/tour-detail/${row._id}`}>Lihat</Link>
          </ul>
        </div>
      </div>
    </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;

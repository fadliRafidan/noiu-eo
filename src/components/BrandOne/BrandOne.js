import brandOne from "@/data/brandOne";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'
SwiperCore.use([Autoplay]);

const slideOptions = {
  spaceBetween: 100,
  slidesPerView: 5,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
  },
};

const { bg, brands } = brandOne;

const BrandOne = () => {

  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/kerja-sama/posts?page=1&perPage=10')
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
    <section className="brand-one">
      <div
        className="brand-one-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={3}>
            <div className="brand-one__title">
              <h2>Our partners</h2>
            </div>
          </Col>
          <Col xl={9}>
            <div className="brand-one__main-content">
              <Swiper className="thm-swiper__slider" {...slideOptions}>
                <div className="swiper-wrapper">
                  {data&&data.map((brand, index) => (
                    <SwiperSlide key={index}>
                      <Image
                          src={`https://api.noiu-eo.com/${brand.image}`}
                        alt={brand.title}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;

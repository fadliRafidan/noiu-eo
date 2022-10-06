import popularTours from "@/data/popularTours";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import axios from 'axios'
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const PopularTours = () => {
  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/paket-wisata/posts?page=1&perPage=10')
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
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Featured tours</span>
          <h2 className="section-title__title">Most Popular Tours</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {data && data.map((tour) => (
                  <SingleTour key={tour._id} tour={tour} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;

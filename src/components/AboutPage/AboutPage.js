import aboutPage from "@/data/aboutPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";

const { image, tagline, title, text1, text2, progress } = aboutPage;

const AboutPage = () => {
  const [countStart, setCountStart] = useState(false);

  
  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/about/posts?page=1&perPage=1')
    .then(result=>{
      // console.log("data api", result.data);
      setData(result.data.data)
      console.log(result.data.data);
    })
    .catch(err=>{
      console.log("error", err);
    })
  }
    
  
  useEffect(()=>{
    getBlog()
   
  },[])

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className="about-page">
      <Container>
      {data&&data.map((row)=>(

        <Row key={row._id}>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image  src={`https://api.noiu-eo.com/${row.image}`} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{row.slogan}</span>
                <h2 className="section-title__title">{row.title}</h2>
              </div>
              {/* <p className="about-page__text-1">{row.body}</p> */}
              <p className="about-page__text-2">{row.body}</p>
             
            </div>
          </Col>
        </Row>
      ))}

      </Container>
    </section>
  );
};

export default AboutPage;

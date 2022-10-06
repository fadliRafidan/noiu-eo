import contactPage from "@/data/contactPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { tagline, title, socials } = contactPage;

const inputs = ["name", "email", "message"];

const ContactPage = () => {

 


  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/kontak/posts?page=1&perPage=1')
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
  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xl={12} lg={5}>
            <div className="contact-page__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Number One Its You</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              {data&&data.map((row)=>(
              <div key={row._id} className="contact-page__social">
                  <a  target="blank" href={row.instagram} >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="blank" href={row.facebook} >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a target="blank" href={row.tiktok} >
                    <i className="fab fa-tiktok"></i>
                  </a>
              </div>
              ))}
            </div>
          </Col>
        
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;

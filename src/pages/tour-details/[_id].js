import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import MainSlider from "@/components/MainSlider/MainSlider";
export  const getServerSideProps = async (context) =>{
  const id = context.params._id
console.log(id);
let res = await fetch('https://api.noiu-eo.com/v1/paket-outbound/post/'+ id);
let data = await res.json();
return {
  props: {
    coder: JSON.parse(JSON.stringify(data.data)) 
  },
};
}
const TourDetails = ({coder}) => {
    console.log(coder);

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
    <Layout pageTitle="Tours Details">
      <MainSlider />
      <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={8}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{coder.title}</h2>
                  <p className="tour-details__top-rate">
                  Start From  <span>{coder.price}</span> / Per Person
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                  <div className="news-details__left">
      <div className="news-details__img">
        <Image  src={`https://api.noiu-eo.com/${coder.image}`} alt="" height={500} width={200} />
        <div className="news-one__date">
          <p>
          {moment(coder.createdAt).format('ll')}
          </p>
        </div>
      </div>
      <div className="news-details__content">
      
        <h3 className="news-details__title">{coder.title}</h3>
       
        <p className="news-details__text">{coder.body}</p>
      </div>
     
     
    </div>
                 
                  </ul>
                </div>
              </div>
            </Col>

<Col xl={4} lg={5}>
<div className="tour-details-two__sidebar">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Book Tours</h3>
        <form
          className="tour-details-two__sidebar-form"
        >

{data && data.map((nomor)=>(
<a key={nomor._id} target="blank"  style={{ zIndex: 0 }}  className="thm-btn tour-details-two__sidebar-btn" href={` https://wa.me/${nomor.nomor}?text=Hai..%20saya%20ingin%20menanyakan%20paket%20wisata%20*NOIU-EO*`}>
  
          Tanya Paket
             
</a>
))}
        </form>
      </div>
      </div>
</Col>
          </Row>

        </Container>
      </div>
      <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Posted          {moment(coder.createdAt).format('ll')}</p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li> */}
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    </Layout>
  );
};

export default TourDetails;

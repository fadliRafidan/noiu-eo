import bookNow from "@/data/bookNow";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
const { bg, subtitle, title } = bookNow;

const BookNow = () => {
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
    <section className="book-now">
      <div
        className="book-now-shape"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="book-now__inner">
              <div className="book-now__left">
                <p>Number One Its You</p>
                <h2>{title}</h2>
              </div>
              <div className="book-now__right">
              
                {data && data.map((nomor)=>(
<a key={nomor._id} target="blank"  style={{ zIndex: 0 }}  className="thm-btn book-now__btn" href={` https://wa.me/${nomor.nomor}?text=Hai..%20saya%20ingin%20menanyakan%20paket%20wisata%20*NOIU-EO*`}>
  
Book tour now
             
</a>
))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookNow;

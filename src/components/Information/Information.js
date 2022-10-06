import information from "@/data/information";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { address, phones, mails } = information;

const Information = () => {


  
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
    <section className="information">
      <Container>
      {data&&data.map((row)=>(
        <Row key={row._id}>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-place"></span>
              </div>
              <div className="information__text">
                <p>
                  
                      <span>Sumedang, Kel. Situ Perum Putra Citra Lestari Block C2</span> <br />
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="information__text">
                <h4>
                      <a
                        href={`tel:${row.nomor}`}
                        className="information__number"
                      >
                        {row.nomor}
                      </a>
                      <br />
                </h4>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-at"></span>
              </div>
              <div className="information__text">
                <h4>
                  
                      <a
                        href={`mailto:${row.email}`}
                        className="information__mail"
                      >
                        {row.email}
                      </a>
                      <br />
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      ))}

      </Container>
    </section>
  );
};

export default Information;

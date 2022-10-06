import newsPage from "@/data/newsPage";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "../NewsOne/SingleNewsOne";
import axios from "axios";
const NewsPage = () => {

  const [data, setData] = useState("")

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/blog/posts?page=1&perPage=999')
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
    <section className="news-one">
      <Container>
        <Row>
          {data&&data.map((news) => (
            <Col
              xl={4}
              lg={6}
              md={6}
              key={news.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne news={news} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;

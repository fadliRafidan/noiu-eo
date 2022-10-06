import destinationsOne from "@/data/destinationsOne";
import React, { useEffect, useState } from "react";
import { Container, Col, Image  } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";
import axios from 'axios'
import Link from "next/link";
const DestinationsPage = () => {
  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/foto/posts')
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
    <section className="destinations-one destinations-page">
      <Container>
        <Masonry className="row position-relative">
          {data&&data.map((row) => (
            <Col key={row._id} xl={6} lg={8}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={`https://api.noiu-eo.com/${row.image}`}
            alt=""
          />
          <div className="destinations-one__content">
              <p className="destinations-one__sub-title">{row.body}</p>
            <h2 className="destinations-one__title" style={{color:'white'}}>
            {row.title}
            </h2>
          </div>
      
         
        </div>
      </div>
    </Col>
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default DestinationsPage;

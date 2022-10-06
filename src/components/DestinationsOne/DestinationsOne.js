import destinationsOne from "@/data/destinationsOne";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import axios from 'axios'

const DestinationsOne = () => {
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
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Destination lists</span>
          <h2 className="section-title__title">Go Exotic Places</h2>
        </div>
        <Row className="masonary-layout">
          {data&& data.slice(0, 5).map((destination) => (
            <SingleDestination key={destination._id} destination={destination} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;

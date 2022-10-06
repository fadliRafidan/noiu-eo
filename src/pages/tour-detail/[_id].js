import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";


export  const getServerSideProps = async (context) =>{
  const id = context.params._id
// console.log(id);
let res = await fetch('https://api.noiu-eo.com/v1/paket-wisata/post/'+ id);
let data = await res.json();
return {
  props: {
    coder : data.data 
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
      <Container>
<Row style={{marginTop:50}}>
      <Col xl={8} lg={7} >
      <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Deskripsi</h3>
        <p className="tour-details-two__overview-text">{coder.body}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Overview</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
              <p>{coder.title}</p>
              </ul>
            </div>
   
          </div>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
              <p> <span>Mulai Dari</span> {coder.price}</p>
              </ul>
            </div>
   
          </div>
          <div className="popular-tours__img">
          <Image
            src={`https://api.noiu-eo.com/${coder.image}`}
            alt=""
          />
          
        </div>
        </div>
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

    </Layout>
  );
};

export default TourDetails;

import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import moment from "moment";
import Sidebar from "@/components/NewsDetailsPage/Sidebar";
import { useRouter } from "next/router";
import axios from "axios";




// export  const getServerSideProps = async (context) =>{
//     const id = context.params._id
//   console.log(id);
//   let res = await fetch('https://api.noiu-eo.com/v1/blog/post/'+ id);
//   let data = await res.json();
//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(data.data)) 
//     },
//   };
//   }

const NewsDetails = () => {
  const router = useRouter()
  const {_id} = router.query;

    const [data, setData] = useState("")

    const getBlog = async()=>{
      const response = await axios.get('https://api.noiu-eo.com/v1/blog/post/'+ _id)
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
     
    },[_id])
  return (
    <Layout pageTitle="News Details">
      <PageHeader title={`News Details` + " - " + data.title} />
      <section className="news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
          <div className="news-details__left">
      <div className="news-details__img">
        <Image  src={`https://api.noiu-eo.com/${data.image}`} alt="" height={500} width={200} />
        <div className="news-one__date">
          <p>
          {moment(data.createdAt).format('ll')}
          </p>
        </div>
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-user-circle"></i>
                {data.author}
              </a>
            </Link>
          </li>
         
        </ul>
        <h3 className="news-details__title">{data.title}</h3>
       
        <p className="news-details__text">{data.body}</p>
      </div>
     
     
    </div>
          </Col>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
    </Layout>
  );
};

export default NewsDetails;

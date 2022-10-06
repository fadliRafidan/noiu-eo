import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import moment from "moment";
import Sidebar from "@/components/NewsDetailsPage/Sidebar";
export  const getServerSideProps = async (context) =>{
    const id = context.params._id
  console.log(id);
  let res = await fetch('https://api.noiu-eo.com/v1/blog/post/'+ id);
  let data = await res.json();
  return {
    props: {
      coder: JSON.parse(JSON.stringify(data.data)) 
    },
  };
  }

const NewsDetails = ({coder}) => {
    console.log(coder);
  return (
    <Layout pageTitle="News Details">
      <PageHeader title={`News Details` + " - " + coder.title} />
      <section className="news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
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
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-user-circle"></i>
                {coder.author}
              </a>
            </Link>
          </li>
         
        </ul>
        <h3 className="news-details__title">{coder.title}</h3>
       
        <p className="news-details__text">{coder.body}</p>
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

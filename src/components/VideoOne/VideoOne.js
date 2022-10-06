import videoOne from "@/data/videoOne";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
import axios from 'axios'
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, tagline, title, iconBoxes } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/about/posts?page=1&perPage=10')
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
    <>
      <section className="video-one">
        {data&&data.map((row)=>(
        <Jarallax key={row._id} className="video-one-bg" speed={0.2} imgPosition="50% 0%">

          <JarallaxImage    src={`https://api.noiu-eo.com/${row.image}`} />
        </Jarallax>
        ))}
        <Container>
          <Row>
          {data &&data.map((row)=>(
          <Col key={row._id} xl={6} lg={6}>
              <div className="video-one__left">
                <div className="video-one__video-link">
                  <div
                    style={{ cursor: "pointer", width: "min-content" }}
                    onClick={() => setOpen(true)}
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </div>
                </div>
                <p className="video-one__tagline">{row.title}</p>
                <h2 className="video-one__title">{row.slogan}</h2>
              </div>
            </Col>
            ))}
            <Col xl={6} lg={6}>
              <div className="video-one__right">
                <ul className="list-unstyled video-one__four-icon-boxes">
                  {iconBoxes.map(({ id, icon, title }) => (
                    <li key={id}>
                      <div className="video-one__icon-box">
                        <span className={icon}></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#">
                          {title.split("\n").map((t, i) => (
                            <Fragment key={i}>
                              <span>{t}</span>
                              <br />
                            </Fragment>
                          ))}
                        </a>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;

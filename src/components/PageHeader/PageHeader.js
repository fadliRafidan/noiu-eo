import bg from "@/images/backgrounds/page-header-bg.jpg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from 'axios'
const PageHeader = ({ title = "", page = "", outerPage = "" }) => {
  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/header/posts?page=1&perPage=1')
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
    <section className="page-header">
      <div className="page-header__top">
      {data&&data.map((row)=>(

        <div key={row._id}
          className="page-header-bg"
          
          style={{  backgroundImage: `url(https://api.noiu-eo.com/${row.image})`,}}
        ></div>
      ))}
        <div className="page-header-bg-overly"></div>
        <Container>
          <div className="page-header__top-inner">
            <h2>{title || page}</h2>
          </div>
        </Container>
      </div>
      <div className="page-header__bottom">
        <Container>
          <div className="page-header__bottom-inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>{" "}
              <li>
                <span>.</span>
              </li>{" "}
              {outerPage && (
                <>
                  <li>{outerPage}</li>{" "}
                  <li>
                    <span>.</span>
                  </li>{" "}
                </>
              )}
              <li className="active">{page || title}</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageHeader;

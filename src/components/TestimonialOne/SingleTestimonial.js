import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from 'axios'
const SingleTestimonial = ({ testimonial }) => {
 
  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/testimoni/posts?page=1&perPage=10')
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
    <>
    {data&&data.map((row)=>(
    <div key={row._id} >

      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <div className="testimonial-one__img">
          <Image
              src={`https://api.noiu-eo.com/${row.image}`}
            alt=""
          />
        </div>
        <div className="testimonail-one__content">
          <div className="testimonial-one__top-revivew-box">
            {Array.from(Array(row.rating)).map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
          <p className="testimonial-one__text">{row.destinasi}</p>
          <div className="testimonial-one__client-info">
            <h3 className="testimonial-one__client-name">{row.title}</h3>
            <p className="testimonial-one__client-title">{row.body}</p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default SingleTestimonial;

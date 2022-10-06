import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
const { toursList } = toursListPage;

const ToursListRight = () => {

  const [data, setData] = useState("")

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/paket-outbound/posts?page=1&perPage=999')
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
    <div className="tours-list__right" >
      <div className="tours-list__inner">
        {data&&data.map(
          ({ id, image, superb, title, price, text, user, _id }) => (
            <div key={id} className="tours-list__single">
              <div className="tours-list__img">
                <Image
                 src={`https://api.noiu-eo.com/${image}`}
                  alt=""
                />
               
              </div>
              <div className="tours-list__content">
              
                <h3 className="tours-list__title">
                  <Link href={`/tour-details/${_id}`}>{title}</Link>
                </h3>
                <p className="tours-list__rate">
                  Mulai dari<span> Rp {price}</span> per/orang
                </p>
                
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ToursListRight;

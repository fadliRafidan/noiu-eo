import galleryOne from "@/data/galleryOne";
import React, { useEffect, useState } from "react";
import SingleGallery from "./SingleGallery";
import axios from 'axios'
const { bg, galleryData } = galleryOne;

const GalleryOne = () => {

  const [data, setData] = useState([])

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/foto/posts?page=1&perPage=5')
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
    <section className="gallery-one">
      <div
        className="gallery-one-bg"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <div className="gallery-one__container-box clearfix">
        <ul className="list-unstyled gallery-one__content clearfix">
          {data&&data.map((row) => (
            <SingleGallery key={row._id} image={row.image} title={row.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryOne;

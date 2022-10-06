import { sidebar } from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
const { posts, categories, tags } = sidebar;

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  const [data, setData] = useState("")

  const getBlog = async()=>{
    const response = await axios.get('https://api.noiu-eo.com/v1/blog/posts?page=1&perPage=4')
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
    <div className="sidebar">
   
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent News</h3>
        <ul className="sidebar__post-list list-unstyled">
          {data && data.map(({ _id, title, image, comments }) => (
            <li key={_id}>
              <div className="sidebar__post-image">
                <Image
                  src={`https://api.noiu-eo.com/${image}`}
                  alt=""
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  {/* <a href="#" className="sidebar__post-content_meta">
                    <i className="far fa-comments"></i>
                    {comments} Comments
                  </a> */}
                  <Link href={`/news-detail/${_id}`}>{title}</Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;

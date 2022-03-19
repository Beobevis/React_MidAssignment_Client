import React, { useState, useEffect } from "react";
import { Button, Form} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import "./PostsDetail.css";
const PostsDetail = () => {
    const {id} = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getitems = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const item = await getitems.json();
      setData(item);
    };
    fetchData();
  }, [setData]);

  return (
    <div className="div_post_container">
      <Form.Text className="detail-page-form" > ID:  {data.id} </Form.Text>
      <Form.Text className="detail-page-form"> TITLE: {data.title} </Form.Text>
      <Form.Text className="detail-page-form-body"> BODY: {data.body} </Form.Text>
      <Link to="/posts"><Button variant="primary" className="btn-lg">Back</Button></Link>    
    </div>
  );
};

export default PostsDetail;

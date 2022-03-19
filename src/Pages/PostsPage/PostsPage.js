import { Table } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostsPage.css";

const PostsPage = () => {
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortByTitle, setSortByTitle] = useState("NONE"); // None, ASC, DES

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        if (!didCancel) {
          console.log(response);
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!didCancel) {
          setIsLoading(false);
          setError("Something went wrong");
        }
      });
    return () => {
      didCancel = true;
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  console.log("Search Text =", searchText);
  console.log("sort: ", sortByTitle);

  const datasFilter = datas.filter((data) =>
    data.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const getdataSorted = () => {
    if (sortByTitle === "NONE") return datasFilter;
    if (sortByTitle === "ASC")
      return datasFilter.sort((data1, data2) => {
        if (data1.title.toLowerCase() < data2.title.toLowerCase()) return -1;
        if (data1.title.toLowerCase() > data2.title.toLowerCase()) return 1;
        return 0;
      });
    if (sortByTitle === "DES")
      return datasFilter.sort((data1, data2) => {
        if (data1.title.toLowerCase() < data2.title.toLowerCase()) return 1;
        if (data1.title.toLowerCase() > data2.title.toLowerCase()) return -1;
        return 0;
      });
  };
  const dataSort = getdataSorted();
  const handleChangeSortByTitle = (evt) => {
    if (sortByTitle === "NONE") {
      setSortByTitle("ASC");
      return;
    }
    if (sortByTitle === "ASC") {
      setSortByTitle("DES");
      return;
    }
    if (sortByTitle === "DES") {
      setSortByTitle("NONE");
    }
  };
  
  const handleDelete = (id) => {
      const newData = datas.filter(item => item.id !== id);
      setData(newData);
  };

  return (
    <div>
      <FloatingLabel
        controlId="floatingInput"
        label="Search for User"
        className="mb-3 floating-label-data"
      >
        <Form.Control
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
          type="text"
          placeholder="Search for User"
        />
      </FloatingLabel>
      <div className="table__data">
        <Table striped bordered hover className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th onClick={handleChangeSortByTitle}>Title({sortByTitle})</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataSort.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td style={{width:"40%"}}>{data.body}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(data.id)}>
                    Delete
                  </Button>
                  <Link to={`/posts/${data.id}`}>
                    <Button variant="success"> Detail</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PostsPage;

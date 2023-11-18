import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
// https://tanstack.com/query/latest/docs/react/overview

export default function PostList() {
  const [postData, setPostData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      });
  }, [refresh]);

  console.log(postData);

  const postList = postData?.map((post) => 
  <Col key={post.id} md="4">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </Col>);

  const refreshing = () => {
    setRefresh(!refresh);
  };

  return (
    <Container className="text-center">
      <h1 className="text-primary">Post List</h1>
      <Row>{postList}</Row>
      <Button variant="info" className="text-white" onClick={refreshing}>
        Refresh Results
      </Button>
    </Container>
  );
}

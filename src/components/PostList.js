import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../utils/slice";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function PostList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  console.log(data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const postList = data?.map((post) => (
    <Col key={post.id} md="4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Col>
  ));

  return (
    <Container className="text-center">
      <h1 className="text-primary">Post List</h1>
      <Row>{postList}</Row>
      <Button
        variant="info"
        className="text-white"
        onClick={() => dispatch(fetchPosts())}
      >
        Refresh Results
      </Button>
    </Container>
  );
}

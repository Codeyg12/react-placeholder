import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../utils/actions";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function PostList() {

  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state.posts)

  useEffect(() => {
    console.log('gfg');
    dispatch(fetchPosts())
  }, [dispatch]);

  const postList = posts?.map((post) => 
  <Col key={post.id} md="4">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </Col>);

  // const refreshing = () => {
  //   setRefresh(!refresh);
  // };

  return (
    <Container className="text-center">
      <h1 className="text-primary">Post List</h1>
      <Row>{postList}</Row>
      <Button variant="info" className="text-white" onClick={() => dispatch(fetchPosts())}>
        Refresh Results
      </Button>
    </Container>
  );
}

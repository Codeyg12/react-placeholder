import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../utils/slice";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";

export default function PostList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  console.log(data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center">Error: {error}</h1>;
  }

  const postList = data?.map((post) => (
    <Col key={post.id} md="4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Col>
  ));

  return (
    <Container className="text-center">
      <Stack className="mx-auto col-md-4">
        <h1 className="text-primary">Post List</h1>
        <Button
          variant="info"
          className="text-white"
          onClick={() => dispatch(fetchPosts())}
        >
          Refresh Results
        </Button>
      </Stack>
      <Row>{postList}</Row>
      <Button
        variant="info"
        className="text-white col-md-4"
        onClick={() => dispatch(fetchPosts())}
      >
        Refresh Results
      </Button>
    </Container>
  );
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../utils/slice";
import { Button, Container, Row, Col, Stack, Card } from "react-bootstrap";

export default function PostList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

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
    <Col key={post.id} md={3} className="mb-2">
    <Card className="m-2" style={{ height: '100%'}}>
      <Card.Header>
        {post.title}
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Text>
          {post.body}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

  ));

  return (
    <Container fluid className="text-center">
      <Stack className="mx-auto col-md-4">
        <h1 className="text-primary">Post List</h1>
        <Button
          variant="info"
          className="text-white my-2"
          onClick={() => dispatch(fetchPosts())}
        >
          Refresh Results
        </Button>
      </Stack>
      <Row>{postList}</Row>
      <Button
        variant="info"
        className="text-white col-md-4 my-2"
        onClick={() => dispatch(fetchPosts())}
      >
        Refresh Results
      </Button>
    </Container>
  );
}


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../utils/slice";
// import { Button, Container, Row, Col, Stack, Card } from "react-bootstrap";

// export default function PostList() {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (loading) {
//     return <h1 className="text-center">Loading...</h1>;
//   }

//   if (error) {
//     return <h1 className="text-center">Error: {error}</h1>;
//   }

//   const postList = data?.map((post) => (
//     <Col key={post.id} md={3}>
//     <Card className="m-2" style={{ minHeight: '250px'}}>
//       <Card.Header>
//         {post.title}
//       </Card.Header>
//       <Card.Body>
//         <Card.Text>
//           {post.body}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </Col>
//   ));

//   return (
//     <Container className="text-center">
//       <Stack className="mx-auto col-md-4">
//         <h1 className="text-primary">Post List</h1>
//         <Button
//           variant="info"
//           className="text-white"
//           onClick={() => dispatch(fetchPosts())}
//         >
//           Refresh Results
//         </Button>
//       </Stack>
//       <Row>{postList}</Row>
//       <Button
//         variant="info"
//         className="text-white col-md-4"
//         onClick={() => dispatch(fetchPosts())}
//       >
//         Refresh Results
//       </Button>
//     </Container>
//   );
// }

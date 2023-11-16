import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
// https://tanstack.com/query/latest/docs/react/overview

function App() {
  const [postData, setPostData] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPostData(data)
    })
  }, [refresh]);

  console.log(postData);
  
  const postList = postData?.map(post => (
    <li key={post.id}>{post.title}</li>
  ))

  const refreshing = () => {
    setRefresh(!refresh)
  }

  return (
    <div className='text-center'>
    <h1 className="text-primary">Hello World!</h1>
    <ul>{postList}</ul>
    <Button variant='info' className='text-white' onClick={refreshing}>Refresh Results</Button>
    </div>
  );
}

export default App;
  
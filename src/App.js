import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'

function App() {

  const [postData, setPostData] = useState([])

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPostData(data)
    })
  }, []);
  
  console.log(postData);

  const postList = postData?.map(post => (
    <li>{post.title}</li>
  ))

  return (
    <>
    <h1 className="text-primary">Hello World!</h1>
    <ul>{postList}</ul>
    <Button variant='info' className='text-white' onClick={() => console.log('working')}>Refresh Results</Button>
    </>
  );
}

export default App;
  
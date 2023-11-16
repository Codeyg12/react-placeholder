import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'

function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }, []);

  return (
    <>
    <h1 className="text-primary">Hello World!</h1>
    <Button variant='info' className='text-white' onClick={() => console.log('working')}>Refresh Results</Button>
    </>
  );
}

export default App;
  
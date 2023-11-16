import Button from 'react-bootstrap/Button'

function App() {
  return (
    <>
    <h1 className="text-primary">Hello World!</h1>
    <Button variant='info' className='text-white' onClick={() => console.log('working')}>Refresh Results</Button>
    </>
  );
}

export default App;
  
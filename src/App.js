import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          nayoks.map(nayok => <Nayok name={nayok.name} address={nayok.address}></Nayok>)
        }

      </header>
    </div>
  );
}

function Nayok(props) {
  console.log(props)
  // const values = Object.values(props);

  const styleDiv = {
    border: '5px solid white',
    borderRadius: '10px',
    margin: '20px',
    padding: '20px'
    
  }
  return (
      <div style={styleDiv}>
        <h2>Name : {props.name}</h2>
        <h2>Address : {props.address.city}</h2>
      </div>

  )
}

export default App;

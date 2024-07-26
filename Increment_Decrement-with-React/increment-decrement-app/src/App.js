
import { useState } from 'react';
import './App.css';



function App() {
  const [count, setCount]=useState(0);
  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  
  }
  const Reset=()=>{
    setCount(0)
  }
  return (
    <div className="App">
      <h1>Hello, React</h1>
      <h3>{count}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;

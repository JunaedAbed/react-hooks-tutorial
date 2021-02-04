import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import { useFetch } from './useFetch';
import { useForm } from './useForm';
import { Hello } from './Hello';

function App() {
  
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
  
  const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))//init function
  );
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/math`);
  
  const inputRef = useRef();
  
  const [showHello, setShowHello] = useState(true);
  
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));//set count in local storage
  }, [count]);
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <div>{!data ? 'loading...' : data}</div>
          
          <div>count: {count}</div>
          
          <button onClick={() => setCount(c => c+1)}>increment</button>
          
          <button onClick={() => setShowHello(!showHello)}>toggle</button>
          {showHello && <Hello />}
          
          <div><input ref={inputRef} name='email' placeholder='email' value={values.email} onChange={handleChange} /></div>
          
          <div><input name='firstName' placeholder='fName' value={values.firstName} onChange={handleChange} /></div>
          
          <div><input name='password' type='password' placeholder='password' value={values.password} onChange={handleChange} /></div>
          
          <button onClick={() => {
           inputRef.current.focus();
          }}>focus</button>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;

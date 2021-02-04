import React, { useRef, useState} from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Components/Hello';

function App() {
  
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
  
  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));
  
  
  const [showHello, setShowHello] = useState(true);
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          
          <button onClick={() => setShowHello(!showHello)}>toggle</button>
          {showHello && <Hello />}
          
          <div><input ref={inputRef} name='email' placeholder='email' value={values.email} onChange={handleChange} /></div>
          
          <div><input name='firstName' placeholder='fName' value={values.firstName} onChange={handleChange} /></div>
          
          <div><input name='password' type='password' placeholder='password' value={values.password} onChange={handleChange} /></div>
          
          <button onClick={() => {
           inputRef.current.focus();
           hello.current();
          }}>focus</button>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;

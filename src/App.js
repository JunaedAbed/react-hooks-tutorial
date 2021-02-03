import React, {useState} from 'react';
import './App.css';
import { useForm } from './useForm';

function App() {
  
  const [values, handleChange] = useForm({email: '', password: ''});
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <div><input name='email' placeholder='email' value={values.email} onChange={handleChange} /></div>
          <div><input name='password' type='password' placeholder='password' value={values.password} onChange={handleChange} /></div>
        </div>
        
      </header>
    </div>
  );
}

export default App;

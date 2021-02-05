//useCallback function is used to prevent functions being created on every single render.

import React, { useCallback, useState } from 'react';
import './App.css';
import { Hello } from './Components/Hello';
import { Square } from './Components/Square';


function App() {
  
  const [count, setCount] = useState(0);
  
  const fvrtNums = [7, 21, 37];
  
  const increment = useCallback((n) => {
    setCount(c => c + n);
  
  }, [ setCount]);
  // const increment = useCallback(() => {
  //   setCount(c => c + 1);
  // }, [ setCount]);
  
  //when count or setCount changes, this func will be recreated and will be put in increment var.

  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <Hello increment={increment} />
          <div>Count: {count}</div>
          {fvrtNums.map(n => {
            return (
              <Square increment={increment} n={n} key={n} />
            );
          })}
        </div>
        
      </header>
    </div>
  );
}

export default App;

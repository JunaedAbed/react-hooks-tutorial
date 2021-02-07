//useMemo hook is for optimizing computed values.

import React, { useMemo, useState } from 'react';
import { useFetch } from './useFetch';

import './App.css';



function App() {
  
  const [count, setCount] = useState(0);
  const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json');
  
  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <div>Count: {count}</div>
          <button onClick={() => setCount(count + 1)}>increment</button>
          <div>{longestWord}</div>
        </div>
        
      </header>
    </div>
  );
}

function computeLongestWord(arr) {
    if(!arr){
      return [];
    }
    
    console.log('computing longest word');
    let longestWord = '';
    
    JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
      if(word.length > longestWord.length){
        longestWord = word;
      }
    }));
    
    return longestWord;
  }

export default App;

//useReducer is for storing state. alt to useState hook.
//for simpler things should use useState.

import React, { useReducer, useState } from 'react';
import './App.css';

function reducer(state, action){
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, {text: action.text, completed: false}],
        todoCount: state.todoCount + 1
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) => 
          idx === action.idx ? {...t, completed: !t.completed} : t
        ),//iterates through the list and flip completed at a certain index.
        todoCount: state.todoCount
      };
   
    default:
      return state;
  }
}

function App() {
  
  const [{todos, todoCount}, dispatch] = useReducer(reducer, {
    todos : [], 
    todoCount: 0
  });
  const [text, setText] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo-List</h1>
        <div>
          <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: 'add-todo', text});
            setText(''); //this will clear out the text
          }}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="add todos" />  
          </form>
          <div>number of todos: {todoCount}</div>
          {todos.map((t, idx) => (
            <div 
              key={t.text} 
              onClick={() => dispatch({type: 'toggle-todo', idx})}
              style={{
                textDecoration: t.completed ? 'line-through' : ''
              }}
            >
              {t.text}
            </div>
          ))}
        </div>
        
      </header>
    </div>
  );
}

export default App;

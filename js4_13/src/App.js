import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newItem = {
        text: text.trim(),
        id: Date.now()
      };
      setItems([...items, newItem]);
      setText('');
    }
  };

  return (
    <div className="todo-app">
      <h3 className="todo-heading">TODO</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className="todo-label">
          Что надо добавить?
        </label>
        <input
          id="new-todo"
          className="todo-input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="todo-button" type="submit">
          Добавить №{items.length + 1}
        </button>
      </form>
    </div>
  );
}

function TodoList({ items }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className="todo-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default App;

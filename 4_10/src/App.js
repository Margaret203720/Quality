import React, { useState } from 'react';

export default function App() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' },
                                      { text: 'Посмотреть видео' }
                                    ]);




  return (
    <div style={styles.container}>
      <p style={styles.text}>Возраст: {age}</p>
      <p style={styles.text}>Фрукты: {fruit}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>{todo.text}</li>
        ))}
      </ul>
      
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    width: '300px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
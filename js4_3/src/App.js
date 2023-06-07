import React from 'react';

const firstName = "John";
const lastName = "Doe";
const age = 30;

const fullName = `${firstName} ${lastName}`;
const message = `Меня зовут ${fullName} и мне ${age} лет.`;

ReactDOM.render(
  <div>{message}</div>,
  document.getElementById('root')
);

export default App;
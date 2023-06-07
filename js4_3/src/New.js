import React from 'react';

const fullName = "John Doe";
const age = 30;

const styles = {
  color: "blue",
  fontSize: "18px",
  fontWeight: "bold"
};

ReactDOM.render(
  <div style={styles}>
    <p>Мое ФИО: {fullName}</p>
    <p>Мой возраст: {age}</p>
  </div>,
  document.getElementById('root')
);

export default New;
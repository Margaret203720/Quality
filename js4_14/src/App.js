import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? <h2>Logged in</h2> : <h2>Logged out</h2>}
      <button onClick={loggedIn ? handleLogout : handleLogin}>
        {loggedIn ? 'LOG OUT' : 'LOG IN'}
      </button>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
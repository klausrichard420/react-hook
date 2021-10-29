import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <p>you clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>clicke me</button>
    </div>
  );
}

export default App;
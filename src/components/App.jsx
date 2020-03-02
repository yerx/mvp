import React, { useState } from 'react';
import FlashcardApp from './FlashcardApp.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FlashcardApp />
    </div>
  );
}

export default App;

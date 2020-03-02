import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Flashcard from './Flashcard.jsx';
import FlashcardForm from './FlashcardForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FlashcardForm />
      <Flashcard />
    </div>
  );
}

export default App;

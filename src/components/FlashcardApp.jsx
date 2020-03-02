import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import FlashcardList from './FlashcardList.jsx';
import FlashcardForm from './FlashcardForm.jsx';

export default function FlashcardApp() {
  const initialCards = [
    {
      category: '1', front: 'front', back: 'back',
    },
    {
      category: '2', front: '2front', back: '2back',
    },
  ];
  const [cards, setCards] = useState(initialCards);

  const addCard = (newCard) => {
    // setCards([...cards, {
    //   id: 3, category: '3', front: '3front', back: '3back',
    // }]);
    setCards([...cards, newCard]);
  };

  return (
    <Paper>
      <AppBar color="primary" position="static" style={{ height: '40px' }}>
        <Toolbar>
          <Typography color="inherit">Flashcard App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={6}>
          <FlashcardForm addCard={addCard} />
          <FlashcardList cards={cards} />
        </Grid>
      </Grid>
    </Paper>
  );
}

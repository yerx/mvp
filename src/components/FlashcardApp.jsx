import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import FlashcardList from './FlashcardList.jsx';
import FlashcardForm from './FlashcardForm.jsx';

export default function FlashcardApp() {
  const initialCards = [
    {
      id: 1, category: 'kayaking', front: 'front', back: 'back',
    },
    {
      id: 2, category: 'hiking', front: '2front', back: '2back',
    },
  ];
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // axios get request
    axios.get('/api/adventures')
      .then((response) => {
        const adventuresData = response.data;
        setCards(adventuresData);
      })
      .catch((err) => {
        console.error('Error with axios get: ', err);
      });
  });

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const deleteCard = (cardId) => {
    console.log('deletecard', cardId);
    const updateCards = cards.filter((card) => card.id !== cardId);

    setCards(updateCards);
  };

  const updateCard = (cardId, editCard) => {
    const updateCards = cards.map((card) => (cardId === card.id ? {
      ...card, category: editCard.category, front: editCard.front, back: editCard.back,
    } : card));

    setCards(updateCards);
  };

  return (
    <Paper>
      <AppBar color="primary" position="static" style={{ height: '40px' }}>
        <Toolbar>
          <Typography color="inherit">Outdoor Adventures</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={6}>
          <FlashcardForm addCard={addCard} />
          <FlashcardList
            cards={cards}
            deleteCard={deleteCard}
            updateCard={updateCard}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

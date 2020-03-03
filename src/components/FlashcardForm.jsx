import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import useInputState from '../hooks/useInputState.js';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function FlashcardForm({ addCard }) {
  const [category, handleCategory, resetCategory] = useInputState('');
  const [front, handleFront, resetFront] = useInputState('');
  const [back, handleBack, resetBack] = useInputState('');

  const handleInputChange = (e) => {
    e.preventDefault();

    const newCard = {
      id: uuidv4(),
      category,
      front,
      back,
    };

    console.log('new card', newCard);

    addCard(newCard);
    resetCategory();
    resetFront();
    resetBack();
  };

  return (
    <>
      <Paper style={{ margin: '1rem 0' }}>
        <Card>
          <form onSubmit={handleInputChange}>
            <TextField
              label="category"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleCategory}
            />
            <TextField
              label="front"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleFront}
            />
            <TextField
              label="back"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleBack}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Card
            </Button>
          </form>
        </Card>
      </Paper>
      <Divider />
    </>
  );
}

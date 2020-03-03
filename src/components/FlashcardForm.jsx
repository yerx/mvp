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
  const [imageUrl, handleImageUrl, resetImageUrl] = useInputState('');
  const [category, handleCategory, resetCategory] = useInputState('');
  const [description, handleDescription, resetDescription] = useInputState('');
  const [details, handleDetails, resetDetails] = useInputState('');
  const [review, handleReview, resetReview] = useInputState('');


  const handleInputChange = (e) => {
    e.preventDefault();

    const newCard = {
      // id: uuidv4(),
      imageUrl,
      category,
      description,
      details,
      review,
    };

    console.log('new card', newCard);

    addCard(newCard);
  };

  return (
    <>
      <Paper style={{ margin: '1rem 0' }}>
        <Card>
          <form onSubmit={handleInputChange}>
            <TextField
              label="image"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleImageUrl}
            />
            <TextField
              label="category"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleCategory}
            />
            <TextField
              label="description"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDescription}
            />
            <TextField
              label="details"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDetails}
            />
            <TextField
              label="review"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleReview}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Adventure
            </Button>
          </form>
        </Card>
      </Paper>
      <Divider />
    </>
  );
}

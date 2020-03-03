import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import useInputState from '../hooks/useInputState.js';


export default function EditCard({ card, updateCard, toggleForm }) {
  const [category, handleCategory, resetCategory] = useInputState(card.category);
  const [front, handleFront, resetFront] = useInputState(card.front);
  const [back, handleBack, resetBack] = useInputState(card.back);

  const handleInputChange = (e) => {
    e.preventDefault();

    const changeCard = {
      // id: uuidv4(),
      category,
      front,
      back,
    };

    console.log('update card', changeCard, card.id);

    updateCard(card.id, changeCard);
    toggleForm();
  };

  return (
    <Card>
      <form onSubmit={handleInputChange}>
        <TextField
          label="category"
          defaultValue={card.category}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleCategory}
        />
        <TextField
          label="front"
          defaultValue={card.front}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFront}
        />
        <TextField
          label="back"
          defaultValue={card.back}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleBack}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Card
        </Button>
      </form>
    </Card>
  );
}

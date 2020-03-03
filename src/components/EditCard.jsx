import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import useInputState from '../hooks/useInputState.js';

export default function EditCard({ card, updateCard, toggleForm }) {
  const [imageUrl, handleImageUrl, resetImageUrl] = useInputState(card.imageUrl);
  const [category, handleCategory, resetCategory] = useInputState(card.category);
  const [description, handleDescription, resetDescription] = useInputState(card.description);
  const [details, handleDetails, resetDetails] = useInputState(card.details);
  const [review, handleReview, resetReview] = useInputState(card.review);

  const handleInputChange = (e) => {
    e.preventDefault();

    const changeCard = {
      // id: uuidv4(),
      imageUrl,
      category,
      description,
      details,
      review,
    };

    console.log('update card', changeCard, card.id);

    updateCard(card.id, changeCard);
    toggleForm();
  };

  return (
    <Card>
      <form onSubmit={handleInputChange}>
        <TextField
          label="image"
          defaultValue={card.imageUrl}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleimageUrl}
        />
        <TextField
          label="category"
          defaultValue={card.category}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleCategory}
        />
        <TextField
          label="description"
          defaultValue={card.description}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDescription}
        />
        <TextField
          label="details"
          defaultValue={card.details}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDetails}
        />
        <TextField
          label="review"
          defaultValue={card.review}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleReview}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Adventure
        </Button>
      </form>
    </Card>
  );
}

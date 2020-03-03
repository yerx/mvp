import React from 'react';
import Paper from '@material-ui/core/Paper';
import Flashcard from './Flashcard.jsx';


export default function FlashcardList({ cards, deleteCard, updateCard }) {
  return (
    <div>
      {cards.map((card) => (
        <Flashcard
          key={card.id}
          id={card.id}
          card={card}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
    </div>
  );
}

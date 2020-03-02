import React from 'react';
import Paper from '@material-ui/core/Paper';
import Flashcard from './Flashcard.jsx';


export default function FlashcardList(props) {
  return (
    <div>
      {props.cards.map((card) => (
        <Flashcard
          key={card.front}
          card={card}
        />
      ))}
    </div>
  );
}

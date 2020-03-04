import React from 'react';
import { Card } from '../Card/Card';

import './CardList.css';

export const CardList = props => {
  const { cards, searchField } = props.data;
  const filteredCards = cards.filter(card => {
    return card.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="CardList">
      {filteredCards.map((card, i) => {
        const { name, email } = card;
        return <Card name={name} email={email} imgKey={i} key={i} />;
      })}
    </div>
  );
};

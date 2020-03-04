import React from 'react';
import { Card } from '../Card/Card';

import './CardList.css';

export const CardList = props => {
  const { searchField, users } = props.data;
  const filtered = users.filter(card => {
    return `${card.name.first} ${card.name.last}`
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <div className="CardList">
      {filtered.map((card, i) => {
        const { email, name, avatar, id } = card;

        return (
          <Card
            name={`${name.first} ${name.last}`}
            email={email}
            key={id.value}
            avatar={avatar}
          />
        );
      })}
    </div>
  );
};

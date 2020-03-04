import React from 'react';

import './Card.css';

export const Card = props => {
  const { name, email, avatar } = props;
  return (
    <div className="Card">
      <img className="Card__img" alt="placeholder" src={avatar.urls[4][512]} />
      <h2 className="Card__title">{name}</h2>
      <small className="Card__footer">{email}</small>
    </div>
  );
};

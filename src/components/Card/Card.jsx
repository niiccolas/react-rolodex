import React from 'react';

import './Card.css';

export const Card = props => {
  const { imgKey, name, email } = props;

  return (
    <div className="Card">
      <img
        className="Card__img"
        alt="placeholder"
        src={`http://unsplash.it/40${imgKey}?random&gravity=center`}
      />
      <h2 className="Card__title">{name}</h2>
      <small className="Card__footer">{email}</small>
    </div>
  );
};

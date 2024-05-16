import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ title, image, tools, link }) => {
  // Assurez-vous que le chemin est correct
  const imagePath = require(`../../assets/${image}`);

  return (
    <div className="card">
      <img src={imagePath} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{tools.join(', ')}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;

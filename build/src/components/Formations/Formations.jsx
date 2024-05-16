import React from 'react';
import './formation.scss';
import formationData from '../../data/formations.json';

const Formation = () => {
  return (
    <div className="formation-container">
      <h2>Formations</h2>
      <ul>
        {formationData.map((formation, index) => (
          <li key={index}>
            <strong>{formation.title}</strong><br />
            {formation.institution}<br />
            {formation.dates}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formation;

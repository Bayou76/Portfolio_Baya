import React from 'react';
import './interets.scss';
import interetsData from '../../data/interets.json';

const Interets = () => {
  return (
    <div className="interets-container">
      <h2>Centres d'Intérêt</h2>
      <ul>
        {interetsData.map((interet, index) => (
          <li key={index}>
            <strong>{interet.title}</strong><br />
            {interet.organization && <p>{interet.organization}</p>}
            {interet.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interets;

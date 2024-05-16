import React from 'react';
import './experiences.scss';
import experiencesData from '../../data/experiences.json';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Expériences</h2>
      <ul>
        {experiencesData.map((experience, index) => (
          <li key={index}>
            <strong>{experience.title}</strong> - {experience.company}
            <p>{experience.dates}</p>
            {experience.description.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPhp, faFigma, faTrello, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import competencesData from "../../data/competences.json"
import './competences.scss';

const Competence = () => {
  return (
    <div className="competence-container">
      <h2>Compétences</h2>
      <ul>
        {Object.entries(competencesData).map(([category, skills]) => (
          <li className="category" key={category}>
            <h3>{category.toUpperCase()}</h3>
            <div className="icons">
              {skills.map((skill, index) => (
                <div className="icon-container" key={index}>
                  <FontAwesomeIcon icon={getFontAwesomeIcon(skill.iconName)} className="icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getFontAwesomeIcon(iconName) {
  switch (iconName) {
    case 'html5':
      return faHtml5;
    case 'css3':
      return faCss3;
    case 'js':
      return faJs;
    case 'react':
      return faReact;
    case 'bootstrap':
      return faBootstrap;
    case 'sass':
      return faSass;
    case 'php':
      return faPhp;
    case 'database':
      return faDatabase;
    case 'figma':
      return faFigma;
    case 'trello':
      return faTrello;
    default:
      return null;
  }
}

export default Competence;

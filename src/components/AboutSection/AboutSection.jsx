import React from 'react';
import './aboutSection.scss';
import Formation from '../Formations/Formations';
import Experience from '../Experiences/Experiences';
import Competence from '../Competences/Competences';
import Interets from '../Interets/Interets';

const AboutSection = () => {
    return (
        <div className="about-container">
            <div className="column">
                <Competence />
            </div>
            <div className="column">
                <Experience />
            </div>
            <div className="column">
                <Formation />
            </div>
            <div className="full-width">
                <Interets />
            </div>
        </div>
    );
}

export default AboutSection;
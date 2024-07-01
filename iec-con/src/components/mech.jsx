import React from 'react';
import sections1 from '../json-components/mech';
import './mech.css'; 

const MechanicalEngineering = () => {
  return (
    <div className="mech-container">
      <h1 className="mech-heading">Mechanical Engineering Department</h1>
      {sections1.map((section, index) => (
        <div key={index} className="section-container">
          <h2 className="section-title">{section.title}</h2>
          {section.tests && (
            <ul className="test-list">
              {section.tests.map((test, i) => (
                <li key={i}>
                  <strong>{test}</strong>
                  {section.details && section.details[i] && (
                    <p>{section.details[i]}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
          {section.instruments_testing && (
            <ul className="instrument-list">
              {section.instruments_testing.map((instrument, j) => (
                <li key={j}>{instrument}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MechanicalEngineering;

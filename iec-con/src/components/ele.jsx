import React from 'react';
import sections2 from '../json-components/ele';
import './ele.css';

const ElectricalEngineering = () => {
  return (
    <div className="ele-container">
      <h1 className="ele-heading">Electrical and Electronics Engineering Department</h1>
      {sections2.map((section, index) => (
        <div key={index} className="section-container">
          <h2 className="section-title">{section.title}</h2>
          {section.instruments_testing && (
            <ul className="instrument-list">
              {section.instruments_testing.map((instrument, i) => (
                <li key={i}>{instrument}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ElectricalEngineering;



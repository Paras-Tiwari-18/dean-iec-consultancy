import React from 'react';
import sections from '../json-components/civil';
import './civil.css'; 
const CivilEngineering = () => {
  return (
    <div className="civil-container">
      <h1 className="civil-heading">Civil Engineering Department</h1>
      {sections.map((section, index) => (
        <div key={index} className="section-container">
          <h2 className="section-title">{section.title}</h2>
          {section.area_description && (
            <ul className="area-list">
              {section.area_description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.subsections && (
            <ul className="subsection-list">
              {section.subsections.map((subsection, j) => (
                <li key={j}>{subsection.title}</li>
              ))}
            </ul>
          )}
          {section.instruments_testing && (
            <ul className="testing-list">
              {section.instruments_testing.map((test, k) => (
                <li key={k}>{test}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CivilEngineering;

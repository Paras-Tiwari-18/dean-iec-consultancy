import React from 'react';
import sections3 from '../json-components/ksop';
import './ksop.css'

const KSOPDepartment = () => {
  return (
    <div className="ksop-container">
      <h1 className="ksop-heading">KSOP Department</h1>
      {sections3.map((section, index) => (
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

export default KSOPDepartment;

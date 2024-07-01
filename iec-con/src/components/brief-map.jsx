import React from 'react';
import brief1_data from '../json-components/brief1';
import './brief.css';
import { useNavigate } from 'react-router-dom';

const colors = ['#86bc25', '#26890d', '#0097a9', '#1076a8']; 

const BriefComponent = () => {
  const navigate = useNavigate();

  const handleMoreInfoClick = (path) => {
    navigate(path);
  };

  return (
    <div className='body-gradient'>
      <h1 className='main-heading'>Explore Consulting services</h1>
      <div className='main-body'>
      
        {brief1_data.map((item, index) => (
          <div
            key={index}
            className='data-brief'
            style={{ borderLeft: `solid ${colors[index % colors.length]} .7em` }}
          >
            <h2 style={{ color: `${colors[index % colors.length]}` }}>{item.heading}</h2>
            <p>{item.description}</p>
            <button 
              style={{ backgroundColor: `${colors[index % colors.length]}` }} 
              onClick={() => handleMoreInfoClick(item.path)}
            >
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BriefComponent;

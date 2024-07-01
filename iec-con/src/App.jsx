import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BriefComponent from './components/brief-map';
import CivilEngineering from './components/civil';
import MechanicalEngineering from './components/mech';
import ElectricalEngineering from './components/ele';
import KSOPDepartment from './components/ksop';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BriefComponent />} />
        <Route path='/CivilEngineering' element={<CivilEngineering />} />
        <Route path='/MechanicalEngineering' element={<MechanicalEngineering />} />
        <Route path='/ElectricalEngineering' element={<ElectricalEngineering />} />
        <Route path='/KSOPDepartment' element={<KSOPDepartment />} />
      </Routes>
    </div>
  );
};

export default App;

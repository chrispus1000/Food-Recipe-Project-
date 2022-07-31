import React from 'react';
import './Components/Style.css';
import Meal from './Components/Meal';

import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      
      </Routes>
    </>
  )
}

export default App;
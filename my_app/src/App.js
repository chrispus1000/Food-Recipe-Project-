import React from 'react';
import './Components/Style.css';
import Meal from './Components/Meal';

import {Route,Routes} from 'react-router-dom';
import Recipedata from './Components/Recipedata';

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:MealId" element={<Recipedata/>}/>
      
      </Routes>
    </>
  )
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetails';
import Comics from './components/Comics';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='app-container'>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Browse-Characters' element={<BrowseCharacters />} />
        <Route path='/Character-Details/:characterId' element={<CharacterDetail />} />
        <Route path='/Comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

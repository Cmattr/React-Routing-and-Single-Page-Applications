import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Browse-Characters' element={<BrowseCharacters />} />
        <Route path='/Character-Details' element={<CharacterDetails />} />
        <Route path='/Comics' element={<Comics />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

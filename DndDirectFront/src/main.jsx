import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx'
import Armors from './Pages/Armors.jsx'
import Weapons from './Pages/Weapons.jsx'
import Spells from './Pages/Spells.jsx'
import CharectersList from './Pages/CharacterPages/CharactersList.jsx'
import CharacterInfo from './Pages/CharacterPages/CharacterInfo.jsx';
import CharacterSpells from './Pages/CharacterPages/CharacterSpells.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/armors/" element={<Armors />} />
      <Route path="/weapons/" element={<Weapons />} />
      <Route path="/spells/" element={<Spells />} />
      <Route path="/characters/" element={<CharectersList />} />
      <Route path="/character/info/:id/" element={<CharacterInfo />} />
      <Route path="/character/spells/:id/" element={<CharacterSpells />} />
    </Routes>
  </BrowserRouter>
)

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
import CharactersList from './Pages/CharacterPages/CharactersList.jsx'
import CharacterInfo from './Pages/CharacterPages/CharacterInfo.jsx';
import CharacterSpells from './Pages/CharacterPages/CharacterSpells.jsx';
import CharacterApp from './Pages/CharacterPages/CharacterApp.jsx';
import CharacterPoss from './Pages/CharacterPages/CharacterPoss.jsx';
import CharacterHistory from './Pages/CharacterPages/CharacterHistory.jsx';
import CharacterNotes from './Pages/CharacterPages/CharacterNotes.jsx';
import CreatePage from './Pages/CharacterPages/CreatePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/armors/" element={<Armors />} />
      <Route path="/weapons/" element={<Weapons />} />
      <Route path="/spells/" element={<Spells />} />
      <Route path="/characters/" element={<CharactersList />} />
      <Route path="/character/info/:id/" element={<CharacterInfo />} />
      <Route path="/character/spells/:id/" element={<CharacterSpells />} />
      <Route path="/character/app/:id/" element={<CharacterApp />} />
      <Route path="/character/poss/:id/" element={<CharacterPoss />} />
      <Route path="/character/history/:id/" element={<CharacterHistory />} />
      <Route path="/character/notes/:id/" element={<CharacterNotes />} />
      <Route path="/character/create/" element={<CreatePage />} />
    </Routes>
  </BrowserRouter>
)

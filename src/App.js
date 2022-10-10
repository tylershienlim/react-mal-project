import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About'
import TopAiring from './Pages/TopAiring';
import SearchContent from './Pages/SearchContent'
import WatchAnime from './Pages/WatchAnime';
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/TopAiring" element={<TopAiring />} />
          <Route path="/Search" element={<SearchContent />} />
          <Route path="/Watch" element={<WatchAnime />} />
        </Routes>
    </Router>
  );
}

export default App;

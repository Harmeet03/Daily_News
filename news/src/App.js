import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import Home from './Home.js'
import Finance from './components/Finance.js'
import Sports from './components/Sports.js'
import Politics from './components/Politics.js'
import Technology from './components/Technology.js'
import NewsDetail from './components/NewsDetail.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news/:id" element={<NewsDetail/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/technology" element={<Technology/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

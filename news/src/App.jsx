import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import Home from './Home.jsx'
import Finance from './components/Finance.jsx'
import Sports from './components/Sports.jsx'
import Politics from './components/Politics.jsx'
import Technology from './components/Technology.jsx'
import NewsDetail from './components/NewsDetail.jsx'

import NotFound from './404.jsx'

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
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


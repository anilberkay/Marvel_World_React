import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero_Info from './components/Hero_Info.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/details/:id' element={<Hero_Info />} />
      </Routes>
    </Router>
    </>
)

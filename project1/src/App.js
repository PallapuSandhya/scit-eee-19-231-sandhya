import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

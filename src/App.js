import React from 'react';
import Notes from './Pages/Notes';
// import Create from './Pages/Create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Bnotes from './Pages/Bnotes';
// import './App.css';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Notes/>}/>
    <Route path="/bnotes/:id" element={<Bnotes/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
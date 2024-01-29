import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Create from './component/Create';
import Update from './component/Update';
import Read from './component/Read';
function App() {
  return (<div className='App'>Crud Operation
  <a href='/create'>New</a>
    <BrowserRouter><Routes>
        <Route path="/create" element={<Create/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="/read" element={<Read/>} />
      </Routes>
    </BrowserRouter></div>
   
  );
}

export default App;

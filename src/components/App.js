import React, {Component} from 'react';
import Login from '../pages/login';
import Input from '../pages/signup';
import { Routes, Route } from "react-router-dom";

import Layout from './layout';


function App() {
    return (
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/signup" element={<Input/>}/>
            <Route path="/login" element={<Login/>}/>
            
          </Routes>
        
      </div>
    );
  }
  
  export default App;
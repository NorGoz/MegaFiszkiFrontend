import React, {Fragment} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from './routes/home/home.component';
import Learn from './routes/learn/learn.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
      <div>
      <Navigation />
      <Routes>
          <Route index element={<Home />}/>
          <Route path="learn/*" element={<Learn />}/>
          <Route path="auth" element={<Authentication />}/>
      </Routes>
      </div>
  );
}

export default App;

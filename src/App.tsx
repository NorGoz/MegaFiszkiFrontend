import React, {Fragment, useState} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from './routes/home/home.component';
import Learn from './routes/learn/learn.component';
import Authentication from './routes/authentication/authentication.component';
import {UserContext} from "./context/user.context";
import Footer from "./components/footer/footer.component";

const App = () => {
    const [user,setUser] = useState('');

  return (
      <div className='app'>
      <UserContext.Provider value={{user,setUser}}>
      <Navigation />
      <Routes>
          <Route index element={<Home />}/>
          <Route path="learn/*" element={<Learn />}/>
          <Route path="auth" element={<Authentication />}/>
      </Routes>
      </UserContext.Provider>
      <footer>{<Footer/>}</footer>
      </div>
  );
}

export default App;

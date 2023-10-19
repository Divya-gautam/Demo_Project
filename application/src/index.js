import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
// import Login from './components/Login';
// import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <Routes> 
   

  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/Register' element={<Register/>}/>
  <Route exact path='/Login' element={<Login/>}/>
  
   </Routes>
   
   </BrowserRouter>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

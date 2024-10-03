import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Watchlist from './components/Watchlist'
import Add from './components/Add'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MovieProvider } from './context/GlobalContext';
import { WishList } from './components/WishList';
import { Watched } from './components/Watched';


function App() {

  return (
    <MovieProvider>
    <Router>
      <ToastContainer/>
      <Header/>

      <Routes>
        <Route path="/" element={<Watchlist/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/wish-list" element={<WishList/>}/>  
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </Router>
    </MovieProvider>
  );
}

export default App;

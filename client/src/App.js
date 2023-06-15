import './App.css';
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <html class=''>
      <div class=''>
        <Header/>
        <div class=''>
        <h1 className="">
          Hello world!
        </h1>
        </div>
      </div>
    </html>
  );
}

export default App;
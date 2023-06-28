import './App.css';
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from "./styles/index";
import Header from './components/header';
import NavTabs from './components/navTabs';
// eslint-disable-next-line
import Home from './components/home';
// eslint-disable-next-line
import { Container, Grid, Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        my='100px'
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={4}>
          <NavTabs />
        </Grid>
        <Grid item >
          {/*
           <Route
           path="/"
           element={<Home />} 
           />
           <Route
           path="/projects"
           element={<Projects />} 
           />
           <Route
           path="/"
           element={<Contact />} 
           />
           
          */}


          {/*
        <Footer />
         */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
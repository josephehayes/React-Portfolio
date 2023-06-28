import './App.css';
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import theme from "./styles/index";
import Header from './components/header';
// eslint-disable-next-line
import Home from './components/home';
// eslint-disable-next-line
import { Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Tabs centered={true}>
          <Tab sx={{ mx: 'auto', my: 'auto' }} label='About Me' />
          <Tab sx={{ mx: 'auto', my: 'auto' }} label='Projects' />
          <Tab sx={{ mx: 'auto', my: 'auto' }} label='Contact' />
        </Tabs>
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

      </Container>
    </ThemeProvider>
  );
}

export default App;
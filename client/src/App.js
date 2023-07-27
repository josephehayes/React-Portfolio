import './App.css';
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./styles/index";
import Header from './components/header';
import { Grid } from '@mui/material';
import MainTabs from './components/customTabPanel';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <MainTabs />
      </Grid>
    </ThemeProvider >
  );
}

export default App;
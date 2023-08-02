import './App.css';
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./styles/theme";
import Header from './components/header';
import { Grid } from '@mui/material';
import MainTabs from './components/tabPanel';
import Footer from './components/footer';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <MainTabs />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
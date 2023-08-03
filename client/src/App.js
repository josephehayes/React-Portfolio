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
      <Grid container spacing={0} rowSpacing={0} height={'100%'} width={'100%'}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <div className='bodyWrapper'>
        <Grid item xs={12}>
          <MainTabs  />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
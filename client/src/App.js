import './App.css';
import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from "./styles/index";
import Header from './components/header';
import NavTabs from './components/navTabs';
// es-lint disable next line
import Home from './components/home';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth='false'>
        <Grid
          container
          columnSpacing={2}
          // direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          my='10px'
        >
          <Grid item xs={1} px={1}>
            <NavTabs />
          </Grid>
          <Grid item xs={11} sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider'
          }}>
            <Box 
            sx={{
              width: '100%',
              minHeight: '80vh'
            }}>
            <TabPanel value='home' index={0} dir={theme.direction}>
              <Home />
            </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
import './App.css';
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from "./styles/index";
import Header from './components/header';
// import NavTabs from './components/navTabs';
// es-lint disable next line
// import Home from './components/home';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function App() {

  const [value, setValue] = useState("'0'");

  const handleChange = (event, newTab) => {
    setValue(newTab);
  }

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
            {/* <NavTabs /> */}
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
              {/* <TabPanel value='home' index={0} dir={theme.direction}>
              <Home />
            </TabPanel> */}
              <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                  <Box>
                    <TabList orientation='vertical' variant='fullWidth' onChange={handleChange} aria-label="Nav Tabs">
                      <Tab label="Home" value="1" />
                      <Tab label="Projects" value="2" />
                      <Tab label="Contact" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">Panel One</TabPanel>
                  <TabPanel value="2">Panel Two</TabPanel>
                  <TabPanel value="3">Panel Three</TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
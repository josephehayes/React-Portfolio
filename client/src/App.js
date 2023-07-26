import './App.css';
import React, { useState, useRef } from 'react';
import { ThemeProvider, CssBaseline, Container, Slide } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import theme from "./styles/index";
import Header from './components/header';
// import NavTabs from './components/navTabs';
// es-lint disable next line
import Home from './components/home';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ProjectsList from './components/projects';
import Contact from './components/contact';

function App() {

  const [value, setValue] = useState("1");
  const [anim, setAnim] = useState('down');
  const containerRef = useRef(null);

  const handleChange = (event, newTab) => {
    value < newTab ? setAnim('up') : setAnim('down');
    setValue(newTab);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Container maxWidth='false'>
          <Grid
            container
            item
            columnSpacing={2}
            justifyContent="space-between"
            alignItems="flex-start"
            my='10px'
          >
            <TabContext value={value}>
              <Grid item mr={1}>
                <TabList orientation='vertical' variant='fullWidth' onChange={handleChange} aria-label="Nav Tabs">
                  <Tab label="Home" value="1" />
                  <Tab label="Projects" value="2" />
                  <Tab label="Contact" value="3" />
                </TabList>
              </Grid>
              <Grid item xs={11} sx={{
                '--Grid-borderWidth': '1px',
                borderTop: 'var(--Grid-borderWidth) solid',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                overflow: 'hidden'
              }}
                ref={containerRef}
                className={theme.tabContainer}
              >
                <Box
                  sx={{
                    width: '100%',
                    minHeight: '80vh',
                    alignItems: 'center'
                  }}
                >
                  <TransitionGroup
                  component={null}
                  appear={true}
                  enter={true}
                  exit={true}
                  >
                    <Slide
                      in={value === "1"}
                      container={containerRef.current}
                      direction={anim}
                      // enter={true}
                      // exit={true}
                      // easing={theme.transitions.easing.easeIn}
                      // timeout={{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen }}
                    >
                      <TabPanel value="1">
                        <Home />
                      </TabPanel>
                    </Slide>
                    <Slide
                      in={value === "2"}
                      container={containerRef.current}
                      direction={anim}
                      // enter={true}
                      // exit={true}
                      // easing={theme.transitions.easing.easeIn}
                      // timeout={{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen }}
                    >
                      <TabPanel value="2">
                        <ProjectsList />
                      </TabPanel>
                    </Slide>
                    <Slide
                      in={value === "3"}
                      container={containerRef.current}
                      direction={anim}
                      // enter={true}
                      // exit={true}
                      // easing={theme.transitions.easing.easeIn}
                      // timeout={{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen }}
                    >
                      <TabPanel value="3">
                        <Contact />
                      </TabPanel>
                    </Slide>
                  </TransitionGroup>
                </Box>
              </Grid>
            </TabContext>
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider >
  );
}

export default App;
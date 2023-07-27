import './App.css';
import React, { useState, useRef, startTransition } from 'react';
import { ThemeProvider, CssBaseline, Container, Slide } from '@mui/material';
import theme from "./styles/index";
import Header from './components/header';
import { Grid, ButtonGroup, Button } from '@mui/material';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import ProjectsList from './components/projects';
import Contact from './components/contact';
import Home from './components/home';

//Lazy loading
// const ProjectsList = React.lazy(() => import('./components/projects'));
// const Home = React.lazy(() => import('./components/home'));
// const Contact = React.lazy(() => import('./components/contact'));


function App() {

  const [value, setValue] = useState("1");
  // const [anim, setAnim] = useState('down');
  // const containerRef = useRef(null);

  const handleChange = (event, newTab) => {
    // value < newTab ? setAnim('up') : setAnim('down');
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
            <Grid item mr={1}>
              {/* <Tabs orientation='vertical' variant='fullWidth' onChange={handleChange} aria-label="Nav Tabs">
                <Tab label="Home" value="1" />
                <Tab label="Projects" value="2" />
                <Tab label="Contact" value="3" />
              </Tabs> */}
              <ButtonGroup orientation="vertical" variant="text" color="primary" aria-label="" onClick={handleChange}>
                <Button value='1'>Home</Button>
                <Button value='2'>Projects</Button>
                <Button value='3'>Contact</Button>
              </ButtonGroup>
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
              // ref={containerRef}
              className={theme.tabContainer}
            >
              <Box
                sx={{
                  width: '100%',
                  minHeight: '80vh',
                  alignItems: 'center'
                }}
              >
                <Slide
                in={value==='1'}
                >
                  <Home />
                </Slide>
                <Slide
                in={value==='2'}
                >
                  <ProjectsList />
                </Slide>
                <Slide
                in={value==='3'}
                >
                  <Contact />
                </Slide>
                {/* <Home />
                  <ProjectsList />
                  <Contact /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider >
  );
}

export default App;
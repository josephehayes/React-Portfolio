import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, styled, keyframes } from '@mui/material';
import theme from "./styles/theme";
import Header from './components/header';
import { Grid, Box } from '@mui/material';
import MainTabs from './components/tabPanel';
import Footer from './components/footer';


function App() {

  const bgAnim = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
}
  100% {
    background-position: 0% 50%;
  }
`;

  const BgBox = styled(Box)(() => ({
    background: 'linear-gradient(315deg, rgba(2, 0, 36, 1) 0%, rgba(82, 121, 111, 1) 35%, rgba(47, 62, 70, 1) 100%)',
    backgroundSize: '500% 500%',
    animation: `${bgAnim} 24s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite`,
  }));


  const [headHeight, setHeadHeight] = useState(0);
  const [footHeight, setFootHeight] = useState(0);
  const headRef = useRef(null);
  const footRef = useRef(null);

  useEffect(() => {
    setHeadHeight(headRef.current.clientHeight);
    setFootHeight(footRef.current.clientHeight);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BgBox>
        <Grid container rowSpacing={0} minHeight={'100vh'} width={'100%'} alignContent={'flex-start'} >
          <Grid item xs={12} className='gridHeader'>
            <Header ref={headRef} />
          </Grid>
            <Grid item xs={12} className='gridMain' height={`calc(100vh - ${headHeight}px - ${footHeight}px - 1px)`}>
              <MainTabs />
            </Grid>
            <Grid item xs={12} className='gridFooter'>
              <Footer ref={footRef} />
            </Grid>
        </Grid>
      </BgBox>
    </ThemeProvider>
  );
}

export default App;
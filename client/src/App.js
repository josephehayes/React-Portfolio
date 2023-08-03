import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./styles/theme";
import { keyframes, css } from '@emotion/react';
import Header from './components/header';
import { Grid } from '@mui/material';
import MainTabs from './components/tabPanel';
import Footer from './components/footer';

function App() {

  const bgAnim = keyframes`
  @keyframes bg-pan-left {
    0% {
      background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-webkit-keyframes bg-pan-left {
    0% {
      background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }`;

  const animatedBg = css`-webkit-animation: ${bgAnim} 8s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite;
  animation: ${bgAnim} 8s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite;
  `;

  const [headHeight, setHeadHeight] = useState(0);
  const [footHeight, setFootHeight] = useState(0);
  const headRef = useRef(null);
  const footRef = useRef(null);

  useEffect(() => {
    setHeadHeight(headRef.current.clientHeight);
    setFootHeight(footRef.current.clientHeight)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container rowSpacing={0} minHeight={'100vh'} width={'100%'} alignContent={'flex-start'} >
        <Grid item xs={12} className='gridHeader'>
          <Header ref={headRef} />
        </Grid>
        <div className='bodyWrapper' animation={animatedBg} >
          <Grid item xs={12} className='gridMain' height={`calc(100vh - ${headHeight}px - ${footHeight}px - 1px)`}>
            <MainTabs />
          </Grid>
          <Grid item xs={12} className='gridFooter'>
            <Footer ref={footRef} />
          </Grid>
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './home';
import ProjectsList from './projects';
import Contact from './contact';
import Fade from '@mui/material/Fade';
import { TransitionGroup } from 'react-transition-group';
import Resume from './resume';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`main-tabpanel-${index}`}
      aria-labelledby={`main-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    className: 'main-tabs',
    id: `main-tabs-${index}`,
    'aria-controls': `main-tabs-${index}`,
  };
}

function MainTabs() {
  const [value, setValue] = useState(0);
  const tabRef = useRef(0);

  const handleChange = (event, newValue) => {
    tabRef.current = newValue;
    setValue(newValue);
  };

  return (
    <Box className='tabcont' sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
      // borderBottom: 1, borderColor: 'divider', 
      paddingBottom: '5px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Nav Tabs">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Resume" {...a11yProps(2)} />
          {/* <Tab label="Contact" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', width: '100%' }}>
        <TransitionGroup>
          <CustomTabPanel value={value} index={0}>
            <Fade
              in={tabRef.current === 0}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 1000, exit: (tabRef.current === 0) ? 1 : 900 }}
            >
              <Home />
            </Fade>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Fade
              in={tabRef.current === 1}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 1000, exit: (tabRef.current === 1) ? 1 : 900 }}
            >
              <ProjectsList />
            </Fade>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Fade
              in={tabRef.current === 2}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 1000, exit: (tabRef.current === 2) ? 1 : 900 }}
            >
              <Resume />
            </Fade>
          </CustomTabPanel>
          {/* <CustomTabPanel value={value} index={3}>
            <Fade
              in={tabRef.current === 3}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 1000, exit: (tabRef.current === 3) ? 1 : 900 }}
            >
              <Contact />
            </Fade>
          </CustomTabPanel> */}
        </TransitionGroup>
      </Box>
    </Box>
  );
}

export default MainTabs;
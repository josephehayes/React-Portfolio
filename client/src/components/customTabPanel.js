import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './home';
import ProjectsList from './projects';
import Contact from './contact';
import { Slide } from '@mui/material';

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 1, borderColor: 'divider', paddingBottom: '1%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Nav Tabs">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Slide in={tabRef.current === 0} direction='right'
        timeout={{ enter: 1000, exit: (tabRef.current === 0) ? 1 : 900 }}>
          <Home />
        </Slide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Slide in={tabRef.current === 1} direction='right'
        timeout={{ enter: 1000, exit: (tabRef.current === 0) ? 1 : 900 }}>
          <ProjectsList />
        </Slide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Slide in={tabRef.current === 2} direction='right'
        timeout={{ enter: 1000, exit: (tabRef.current === 0) ? 1 : 900 }}>
          <Contact />
        </Slide>
      </CustomTabPanel>
    </Box>

  );
}

export default MainTabs;
import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const NavTabs = () => {
  const [tab, setTab] = useState('0');
  const handleChange = (event, newTab) => {
    setTab(newTab);
  }
  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={tab}>
        <Box>
          <TabList orientation='vertical' variant='fullWidth' onChange={handleChange} aria-label="Nav Tabs">
            <Tab label="Home" value='0' />
            <Tab label="Projects" value='1' />
            <Tab label="Contact" value='2' />
          </TabList>
        </Box>
        <TabPanel value='0'>Panel One</TabPanel>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel One</TabPanel>
      </TabContext>
    </Box>
  );
}

export default NavTabs;


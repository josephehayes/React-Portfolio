import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} variant='fullWidth' orientation='vertical' onChange={handleChange} aria-label="Nav Tabs"> 
        <Tab label="Home" value="home" />
        <Tab label="Projects" value="projects" />
        <Tab label="Contact" value="contact" />
      </Tabs>
    </Box>
  );
}

export default NavTabs;
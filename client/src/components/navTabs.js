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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* orientation='vertical' */}
      <Tabs value={value} variant='fullWidth' centered onChange={handleChange} aria-label="Nav Tabs"> 
        <LinkTab label="Home" href="/" />
        <LinkTab label="Projects" href="/projects" />
        <LinkTab label="Contact" href="/contact" />
      </Tabs>
    </Box>
  );
}

export default NavTabs;
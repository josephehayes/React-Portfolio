import React from 'react';
import { Link } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography, createTheme } from '@mui/material';


const Header = () => {
    return (
        <AppBar>
            <Box>
            <Toolbar sx={{ my: 3, mx: 3 }}>
                <Typography component='h1' variant='h3'>
                Joseph Hayes||
                </Typography>
            </Toolbar>
            <Tabs centered={true}>
                <Tab sx={{ mx: 'auto', my: 'auto' }} label='About Me'/>
                <Tab sx={{ mx: 'auto', my: 'auto' }} label='Projects'/>
                <Tab sx={{ mx: 'auto', my: 'auto' }} label='Contact'/>
            </Tabs>
            </Box>
        </AppBar>
    );
}

export default Header;
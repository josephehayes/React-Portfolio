import React from 'react';
import { Link } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                Logo
            </Toolbar>
            <Tabs>
                <Tab label='About Me'/>
                <Tab label='Projects'/>
                <Tab label='Contact'/>
            </Tabs>
        </AppBar>
    );
}

export default Header;
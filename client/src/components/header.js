import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography } from '@mui/material';


const Header = () => {
    return (
        <AppBar>
            <Box>
                <Toolbar sx={{ my: 3, mx: 3 }}>
                    <Typography component='h1' variant='h3'>
                        Joseph Hayes||
                        Full-stack Developer
                    </Typography>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Header;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography, Grid } from '@mui/material';

const Header = () => {
    return (
        <AppBar>
            <Box>
                <Toolbar sx={{ my: 3, mx: 3 }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <Grid item xs>
                        <Typography component='h1' variant='h3'>
                            Joseph Hayes
                        </Typography>
                        </Grid>
                        <Grid item xs>
                        <Typography component='h1' variant='subtitle1'>
                            Full-stack Developer
                        </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Header;
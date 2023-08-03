import React from 'react';
import theme from '../styles/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography, Grid, Link, Tooltip } from '@mui/material';
import { GitHub, AlternateEmail, LinkedIn } from '@mui/icons-material';
//Twitter removed

const Header = () => {
    return (
        <AppBar position="sticky">
            <Box>
                <Toolbar sx={{ my: 3, mx: 3 }}>
                    <Grid
                        container
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                    >
                        <Grid
                            item
                            xs={11}
                        >
                            <Grid item xs>
                                <Typography component='h1' variant='h3' className={theme.header} sx={{ fontWeight: '500' }}>
                                    Joseph Hayes
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography component='h1' variant='subtitle1'>
                                    Full-stack Web Developer
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item
                            xs={1}
                            alignItems={'center'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Tooltip title="GitHub">
                                <Link href="https://github.com/josephehayes" target="_blank" className="linkIcon" >
                                    <GitHub fontSize='large' />
                                </Link>
                            </Tooltip>
                            <Tooltip title="LinkedIn">
                                <Link href="https://www.linkedin.com/in/josephehayes1/" target="_blank" className="linkIcon" >
                                    <LinkedIn fontSize='large' />
                                </Link>
                            </Tooltip>
                            <Tooltip title="Email">
                                <Link href="mailto:joey.hayes.1996@gmail.com" target="_blank" className="linkIcon" >
                                    <AlternateEmail fontSize='large' />
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Header;
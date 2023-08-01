import React from 'react';
import theme from '../styles/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography, Grid, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

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
                                <Typography component='h1' variant='h3' className={theme.header}>
                                    Joseph Hayes
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography component='h1' variant='subtitle1'>
                                    Full-stack Developer
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
                            <Link href="https://github.com/josephehayes" target="_blank" className="linkIcon" >
                                <GitHub fontSize='large' />
                            </Link>
                            <Link href="https://www.linkedin.com/in/josephehayes1/" target="_blank" className="linkIcon" >
                                <LinkedIn fontSize='large' />
                            </Link>
                            <Link href="https://twitter.com/s3f96" target="_blank" className="linkIcon" >
                                <Twitter fontSize='large' />
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Header;
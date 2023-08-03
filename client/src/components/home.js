import { Box, Typography, Grid, Paper } from '@mui/material';
import React, { forwardRef, memo } from 'react';

const Home = forwardRef((props, ref) => {
    const { style } = props;

    return (
        <Box ref={ref} style={style} sx={{ width: '100%', height: '100%' }}>
            <Paper sx={{ minHeight: '100%' }}>
                <Grid container sx={{ paddingTop: '2%', paddingBottom: '2%' }}>
                    <Grid item xs={6} sx={{ paddingLeft: '50px' }}>
                        <Typography variant="h1" color="text">
                            Hi,
                        </Typography>
                        <br />
                        <Typography variant='h5'>
                            I'm <strong>Joseph</strong>, a <strong>full-stack web developer</strong> with a passion for building <strong>user-centered applications</strong>. I graduated from the University of Utah Full-Stack Bootcamp in 2023.
                        </Typography>
                        <br />
                        <Typography variant='h5'>
                            I've worked most of my career in a variety of customer-facing technical roles. This experience has given me a deep understanding of the <strong>needs of users</strong>, and I use this knowledge to build applications that are both <strong>functional</strong> and <strong>user-friendly</strong>.
                        </Typography>
                        <br />
                        <Typography variant='h5'>
                            Please take a look around my site!
                        </Typography>
                    </Grid>
                    <Grid item xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Box
                            component="img"
                            sx={{
                                width: '33%',
                                height: 'auto',
                                borderRadius: '50%'
                            }}
                            alt="Pic of me"
                            src="/static/headshot.jpeg"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
})

export default memo(Home);
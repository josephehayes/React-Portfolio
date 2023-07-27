import { Box, Typography } from '@mui/material';
import React, { forwardRef, memo } from 'react';

const Home = forwardRef((props, ref) => {

    return (
            <Box ref={ref} sx={{ width: '100%', height: '100%' }}>
                <Typography component='body' variant='body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Morbi non arcu risus quis varius. Cursus eget nunc scelerisque viverra mauris. Massa massa ultricies mi quis hendrerit dolor. Hendrerit gravida rutrum quisque non tellus. Nec ullamcorper sit amet risus. Congue quisque egestas diam in arcu cursus euismod quis viverra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Neque volutpat ac tincidunt vitae semper quis lectus. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Fringilla urna porttitor rhoncus dolor purus non. Odio morbi quis commodo odio aenean sed adipiscing. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Sem nulla pharetra diam sit amet nisl suscipit. Non nisi est sit amet facilisis magna etiam tempor. Tempor orci dapibus ultrices in iaculis nunc sed augue.
                </Typography>
            </Box>
    );
})

export default memo(Home);
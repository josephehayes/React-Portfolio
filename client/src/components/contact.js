// es-lint disable next line
import { Box, Grid, Stack, Link, Typography } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import React, { memo } from 'react';

const Contact = () => {
// memo(function Contact() {
    return (
        <Grid container
            orientation={'vertical'}
            justifyContent={'center'}
        >
            <Grid item spacing={4} xs={12} alignItems={'center'}>
                <Box sx={{
                    display: 'flex',
                    maxWidth: '25%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'space-around',
                    
                }}>
                    <Link href="https://github.com/josephehayes" target="_blank" >
                        <GitHub fontSize='large' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/josephehayes1/" target="_blank" >
                        <LinkedIn fontSize='large' />
                    </Link>
                    <Link href="https://twitter.com/s3f96" target="_blank" >
                        <Twitter fontSize='large' />
                    </Link>
                </Box>
            </Grid>
            <Grid item>
                <Stack>
                    <Typography variant="body1" color="">
                        {/* 2 input fields (Your Email, Your Message)
                    , 1 button (Send Message)
                    Will send to me somehow, need to figure out a way */}

                        {/* Filler Text */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam. Pellentesque diam volutpat commodo sed egestas egestas. Eget mauris pharetra et ultrices neque ornare aenean euismod. In mollis nunc sed id semper risus in hendrerit. Felis donec et odio pellentesque diam volutpat commodo sed. Ut venenatis tellus in metus vulputate eu scelerisque felis. Rhoncus urna neque viverra justo nec ultrices dui. A cras semper auctor neque vitae tempus quam pellentesque nec. Felis imperdiet proin fermentum leo vel orci porta non. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}
// );

export default Contact;
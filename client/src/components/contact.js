// es-lint disable next line
import { Box, Grid, Icon, Stack, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Grid container
            orientation={'vertical'}
            justifyContent={'center'}
            rowSpacing={4}
        >
            <Grid item>
                <Box>
                    {/* <Icon>
                    GitHub
                    </Icon>
                    <Icon>
                    LinkedIn
                    </Icon>
                    <Icon>
                    Twitter
                </Icon> */}

                    {/* Filler */}
                    <Typography>
                        Github LinkedIn Twitter
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Stack>
                    {/* 2 input fields (Your Email, Your Message)
                    , 1 button (Send Message)
                    Will send to me somehow, need to figure out a way */}

                    {/* Filler Text */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam. Pellentesque diam volutpat commodo sed egestas egestas. Eget mauris pharetra et ultrices neque ornare aenean euismod. In mollis nunc sed id semper risus in hendrerit. Felis donec et odio pellentesque diam volutpat commodo sed. Ut venenatis tellus in metus vulputate eu scelerisque felis. Rhoncus urna neque viverra justo nec ultrices dui. A cras semper auctor neque vitae tempus quam pellentesque nec. Felis imperdiet proin fermentum leo vel orci porta non. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Contact;
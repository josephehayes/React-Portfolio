import React, { forwardRef } from 'react';
import { Typography, Box } from '@mui/material';

const Footer = forwardRef((props, ref) => {
    return (
        <Box
            sx={{
                // position: 'absolute',
                width: '100%',
                height: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: 1,
                borderColor: 'divider',
                pt: 3,
                padding: 0,
                bottom: 0,
            }}
            ref={ref}
        >
            <Typography>
                Made with NodeJS, React, MUI (and love ❤️) 
            </Typography>
        </Box>
    );
});

export default Footer;
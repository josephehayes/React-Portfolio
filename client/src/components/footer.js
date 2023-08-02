import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: 1,
                borderColor: 'divider',
                mb: 3,
                pt: 3,
                padding: 0,
                bottom: 0,
            }}
        >
            <Typography>
                Made with NodeJS, React, MUI (and love ❤️) 
            </Typography>
        </Box>
    );
}

export default Footer;
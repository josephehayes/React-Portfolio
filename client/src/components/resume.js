import { Box, Typography } from '@mui/material';
import React, { forwardRef, memo } from 'react';


const Resume = forwardRef((props, ref) => {
    const { style } = props;

    return (
        <Box
            ref={ref}
            style={style}
        >
            <Typography>
                
            </Typography>
        </Box>
    );
})

export default memo(Resume);
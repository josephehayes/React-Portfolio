import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        root: {
            minHeight: '100vh',
            width: '100vw',
            overflow: 'hidden',
            margin: 0,
            padding: 0
        },
        mode: 'dark',
        primary: {
            main: '#52796F',
            contrastText: '#CAD2C5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#2F3E46',
            paper: '#2F3E46'
        },
        text: {
            primary: '#CAD2C5',
        },
        divider: '#CAD2C5'
    },
});

export default theme;
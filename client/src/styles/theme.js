import { createTheme } from '@mui/material/styles';

const font = "'Montserrat', sans-serif";

const theme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    // fontSize: '50px'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
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
    typography: {
        fontFamily: font,
        header: {
            fontFamily: font,
        },
    }
});

export default theme;
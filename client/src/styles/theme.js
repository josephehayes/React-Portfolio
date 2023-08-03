import { createTheme } from '@mui/material/styles';
// import { keyframes, css } from '@emotion/react';

// const bgPanLeft = keyframes`
//   @keyframes bg-pan-left {
//     0% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }`;

//   const animatedItem = css`
//   animation: ${bgPanLeft} 8s cubic-bezier(0.550, 0.055, 0.675, 0.190) both
//   `;


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
            // default: '#2F3E46',
            // default: `${bgPanLeft} 8s cubic-bezier(0.550, 0.055, 0.675, 0.190) both`,
            paper: '#2F3E46'
        },
        // animated: {
        //     bg: `${bgPanLeft} 8s cubic-bezier(0.550, 0.055, 0.675, 0.190) both`,
        // },
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
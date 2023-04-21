import {createTheme} from "@mui/material";
import '@fontsource/poppins/300.css'; // Include the 300 font weight
import '@fontsource/poppins/400.css'; // Include the 400 font weight
import '@fontsource/poppins/500.css'; // Include the 500 font weight
import '@fontsource/poppins/700.css'; // Include the 700 font weight
import '@fontsource/poppins/900.css'; // Include the 900 font weight


export const theme = createTheme({
    palette: {
        primary: {
            main: '#0272F0',
        },
        secondary: {
            main: '#F0C413',
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontWeight: "bold",
        },
        h2: {
            fontWeight: "bold",
        },
        h3: {
            fontWeight: "bold",
            lineHeight: 1,
        },
        h4: {
            fontWeight: "bold",
            lineHeight: 1,
        },
        h5: {
            fontWeight: "bold",
        },
        h6: {
            fontWeight: "bold",
        },
        body1: {
            fontWeight: 400,
            fontSize: '0.75rem',
        },

    }
});

import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    CssBaseline,
    useScrollTrigger
} from "@mui/material";
import {Navigation} from "@/components/Layout/Navigation";


interface Props {
    children: React.ReactElement;
    window?: () => Window;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            backgroundColor: trigger ? "black" : "transparent",
            transition: "background-color 0.2s ease-out"
        }
    });
}

function Header() {
    return (
        <>
            <CssBaseline />
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end"}}>
                            <Navigation />
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    );
}

export default Header;
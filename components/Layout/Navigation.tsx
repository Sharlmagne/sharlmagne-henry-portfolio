import React from "react";
import {
    AppBar,
    Box,
    Button,
    Dialog,
    IconButton,
    Toolbar,
    useMediaQuery,
    useTheme,
    Slide
} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Close, Menu} from "@mui/icons-material";
import {useState} from "react";
import {TransitionProps} from "@mui/material/transitions";
import {auto} from "@popperjs/core";

export const enum SectionIdEnum {
    Home = 'hero',
    About = 'about',
    Projects = 'projects',
    Contact = 'contact'

}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const navigationItems = [
    {
        title: 'Home',
        sectionId: SectionIdEnum.Home
    },
    {
        title: 'About',
        sectionId: SectionIdEnum.About
    },
    {
        title: 'Projects',
        sectionId: SectionIdEnum.Projects
    },
    {
        title: 'Contact',
        sectionId: SectionIdEnum.Contact
    }
];

export function Navigation() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    function onOpenHandler () {
        setOpen(true);
    }

    function onCloseHandler () {
        setOpen(false);
    }

    const mappedNavigationItems = navigationItems.map((item) => (
        <AnchorLink key={item.sectionId} style={{width: "100%"}} href={`#${item.sectionId}`}>
            <Button
                fullWidth={isMobile}
                onClick={onCloseHandler}
                sx={{
                    color: isMobile ? "black" : "rgba(255, 255, 255, 0.85)",
                    transition: "all 0.2s ease-out",
                    "&:hover": {
                        bgcolor: "transparent",
                        color: theme.palette.secondary.main,
                        transform: "scale(1.1)"
                    }
                }}
            >
                {item.title}
            </Button>
        </AnchorLink>
    ));

    return <>
        <Box sx={{ display: {sm: "block", xs: "none"}}}>
            {mappedNavigationItems}
        </Box>
        <IconButton
            onClick={onOpenHandler}
            sx={{ display: {sm: "none", xs: "block"}, color: "rgba(255, 255, 255, 0.85)"}}
        >
            <Menu/>
        </IconButton>

        <Dialog
            open={open}
            fullScreen
            fullWidth
            TransitionComponent={Transition}
            hideBackdrop
            sx={{height: "32vh"}}
        >
            <AppBar position="static" sx={{background: "black", color: "white"}}>
                <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
                    <IconButton
                        onClick={onCloseHandler} sx={{color: "white"}}>
                        <Close/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 4,
            }}
            >
                {mappedNavigationItems}
            </Box>
        </Dialog>
    </>
}
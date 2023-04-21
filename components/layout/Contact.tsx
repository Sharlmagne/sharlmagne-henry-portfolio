// @flow
import * as React from 'react';
import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import {EmailRounded} from "@mui/icons-material";
import onEmailClickHandler from '@/util/onEmailClickHandler';
import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react";

export default function Contact() {
    const theme = useTheme();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll( {
        target: targetRef,
        offset: ["start end", "end center"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return <div ref={targetRef}>
        <Box id="contact" component="section" sx={{ backgroundColor: "black", color: "white"}}>
            <Container>
                <Box sx={{ textAlign: "center", py: 6}}>
                    <Typography variant="body1" color="secondary" sx={{fontWeight: "bold"}}>
                        {"WHAT'S NEXT?"}
                    </Typography>
                    <motion.div
                        style={{opacity}}
                    >
                        <Typography variant="h4" py={2} fontWeight={900}>
                            {"Let's work together."}
                        </Typography>
                    <Box maxWidth={600} mx="auto">
                        <Typography variant="body1" pb={6} sx={{color: "rgba(255, 255, 255, 0.7)"}}>
                            If you&apos;d like to talk about a project, contact me via email at {" "}
                            <Typography
                                color="primary"
                                component="span"
                                onClick={onEmailClickHandler}
                                sx={{display: "inline", cursor: "pointer", transition: "all 0.3s ease-in-out", "&:hover": {color: "secondary.main"}}}
                            >
                                sharlmagne.henry@gmail.com
                            </Typography>.
                            I&apos;m currently available for any, full-stack development but mainly frontend development, design systems projects & landing pages gigs.
                        </Typography>
                    </Box>
                    </motion.div>
                    <Button
                        endIcon={<EmailRounded/>}
                        onClick={onEmailClickHandler}
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "0px",
                            borderBottom: `3px solid ${theme.palette.secondary.main}`,
                            "&:hover": {
                                color: "primary.main",
                            }
                        }}
                    >
                        Write me an email
                    </Button>
                </Box>
            </Container>
        </Box>
    </div>
}
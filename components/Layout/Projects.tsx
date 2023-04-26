// @flow
import * as React from 'react';
import {useRef} from "react";
import {Box, Button, Container, Grid, Typography, useTheme} from "@mui/material";
import projects from "@/public/data/projects";
import ProjectCards from "@/components/Cards/ProjectCards";
import { motion, useScroll, useTransform } from "framer-motion";



export default function Projects() {
    const theme = useTheme();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll( {
        target: targetRef,
        offset: ["start end", "end start"]
    });
    // const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 0.2], ["-100vw", "0vw"]);

    return <Box id="projects" component="section">
        <Container>
            <Box sx={{py: 6}}>
                <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'left' }, fontWeight: 900 }}>
                    Recent Projects
                </Typography>
                <motion.div
                    ref={targetRef}
                    style={{
                        // opacity,
                        x,
                }}
                >
                    <Grid container my={6} spacing={2} justifyContent="center">
                        {projects.map((project, index) => (
                            <Grid item md={4} key={index}>
                                <ProjectCards {...project}/>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        sx={{
                            color: "black",
                            fontWeight: "900",
                            fontSize: "1.25rem",
                            textTransform: "lowercase",
                            paddingBottom: "1px",
                            borderRadius: "0px",
                            borderBottom: `3px solid ${theme.palette.secondary.main}`,
                            "&:hover": {
                                color: theme.palette.primary.main,
                            }
                        }}
                        href="https://github.com/Sharlmagne"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        my github
                    </Button>
                </Box>
            </Box>
        </Container>
    </Box>
}
// @flow
import * as React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export default function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll( {
        target: targetRef,
        offset: ["end end", "end start"]
    });
    const backgroundColor = useTransform(scrollYProgress, [0.25, 0.55], ["rgba(0,0,0,0)", "rgba(0,0,0)"]);
    const x = useTransform(scrollYProgress, [0.55, 1.5], ["0vw", "-100vw"]);

    return <Box ref={targetRef} id="hero" component="section" sx={{
            backgroundImage: "url('/images/sharlmagne-web-hero.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "800px",
            mt: -8,
        }}>
            <motion.div
                style={{
                    backgroundColor,
                    height: "inherit",
            }}>
                <Container sx={{height: "inherit", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                    <motion.div
                        style={{x}}
                        animate={{
                            opacity: [0, 1],
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                ease: "easeInOut"
                            }
                        }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            height: "inherit",
                            pb: 10,
                        }}>
                            <Typography variant="h4" color="secondary" sx={{textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)'}}>
                                This is
                            </Typography>
                            <Typography variant="h4" color="white" sx={{textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)'}}>
                                Sharlmagne Henry
                            </Typography>
                            <Box mt={1}>
                                <Typography variant="h3" color="white" sx={{opacity: 0.7}}>
                                    Software/Web
                                </Typography>
                                <Typography variant="h2" color="white" sx={{opacity: 0.7}}>
                                    Developer
                                </Typography>
                            </Box>
                        </Box>
                    </motion.div>
                </Container>
            </motion.div>
        </Box>
}
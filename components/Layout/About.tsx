// @flow
import * as React from 'react';
import {Box, Button, Container, Grid, Typography, useTheme} from "@mui/material";
import {DownloadOutlined} from "@mui/icons-material";
import downloadPDF from "@/util/downloadPDF";

export default function About() {
    const theme = useTheme();

    return <Box id="about" component="section" sx={{
        bgcolor: "black",
        py: 6
    }}>
        <Container>
            <Box sx={{color: "white"}}>
                <Typography variant="h3" color="primary" fontWeight={900}>
                    My Skillset
                </Typography>
                <Grid container sx={{pt: 4}} spacing={4}>
                    <Grid item md={6} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <Box mb={6}>
                            <Typography variant="h4">
                                JavaScript, TypeScript & Python
                            </Typography>
                            <Typography variant="h6" sx={{opacity: 0.7}}>
                                React.js, Next.js, Express.js & MongoDB
                            </Typography>
                        </Box>
                        <Button
                            onClick={() => downloadPDF("sharlmange_henry_resume.pdf")}
                            startIcon={<DownloadOutlined/>}
                            variant="contained"
                            color="secondary"
                            sx={{
                                width: "fit-content",
                                fontWeight: "bold",
                                textTransform: "lowercase",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    backgroundColor: theme.palette.primary.main,
                                    color: "white",
                                }
                            }}>
                            my resume
                        </Button>
                    </Grid>
                    <Grid item md={6}>
                        <Typography sx={{fontWeight: "light", opacity: 0.7, fontSize: "1rem"}}>
                            As a web developer with expertise in the MERN (MongoDB, Express.js, React.js, and
                            Node.js) stack. I possess a diverse and comprehensive skillset that makes me a valuable
                            asset to any web development team. With a strong foundation in both front-end and back-end technologies,
                            I am well-equipped to create innovative and efficient web applications that meet client requirements
                            and exceed user expectations. My commitment to staying updated with the latest web development
                            trends and my passion for writing clean and maintainable code make me a valuable
                            asset to any web development project.
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    </Box>;
}
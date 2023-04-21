import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
interface ProjectCardsProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function ProjectCards(project: ProjectCardsProps) {

    return (
        <div>
            <Card
                elevation={0}
                sx={{
                    maxWidth: 600,
                    bgcolor: "black",
                    cursor: "default",
                }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="green iguana"
                    sx={{
                        bgcolor: "white",
                    }}
                />
                <CardContent sx={{bgcolor: "black", color: "white", height: 270, p: 4, borderRadius: "0px"}}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}>
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        pt={2}
                        sx={{
                            maxHeight: "180px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            opacity: 0.7,
                            // whiteSpace: "nowrap"
                        }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end', bgcolor: "black"}}>
                    <Button
                        onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                        size="small"
                        sx={{
                            color: "#F0C413",
                            fontWeight: "bold",
                            borderRadius: "0px",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                color: "primary.main",
                                transform: "scale(1.1)"
                            }
                        }}
                    >
                        View
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
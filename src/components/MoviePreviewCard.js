import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const MoviePreviewCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "93vw",
        height: "32vh",
        backgroundColor: "#16181f", // dark background
        color: "white",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Left side - Poster image */}
      <CardMedia
        component="img"
        image="/images/mistryImg.jpg"
        alt="Mistry Poster"
        sx={{
          width: "57%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Right side - Details */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 2,
          width: "100%",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Mistry
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          A dark investigative drama begins with Mistry unraveling strange crimes and a haunting truth.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
  variant="contained"
  sx={{
    backgroundColor: "#252833",
    color: "#fff",
    padding: "0.6rem 1.5rem",
    fontWeight: "600",
    textTransform: "none",
    transition: "all 0.3s ease",
    '&:hover': {
      backgroundColor: "#272a34",
      transform: "scale(1.05)",
    },
  }}
>
            Trailer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoviePreviewCard;

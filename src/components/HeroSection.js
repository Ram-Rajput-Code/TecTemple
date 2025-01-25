import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = ({ title, subtitle, backgroundImage }) => (
  <Box
    sx={{
      // Stick to the top of the viewport
      zIndex: "-1",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed", // Keeps the image fixed while scrolling
      backgroundPosition: "center",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      padding: 2,
      backgroundColor: backgroundImage ? "transparent" : "rgb(177,212,219)",
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
      {title}
    </Typography>
    <Typography variant="h5" sx={{ mt: 1 }}>
      {subtitle}
    </Typography>
  </Box>
);

export default HeroSection;

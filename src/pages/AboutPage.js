import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";

const AboutPage = () => (
  <Box>
    <HeroSection
      title="About Tec Temple"
      subtitle="Empowering the Next Generation of Developers"
    />
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Tec Temple is a premier software training institute offering
        cutting-edge courses in front-end, back-end, and full-stack development.
        Our mission is to empower students with the skills they need for a
        successful career.
      </Typography>
      <Grid container spacing={2}>
        <CardComponent
          title="Experienced Trainers"
          content="Learn from industry experts."
        />
        <CardComponent
          title="Modern Curriculum"
          content="Stay ahead with the latest technologies."
        />
      </Grid>
    </Box>
  </Box>
);

export default AboutPage;

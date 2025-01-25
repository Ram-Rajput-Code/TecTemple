import React from "react";
import { Box, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import DropdownMenu from "../components/DropdownMenu";

const ServicesPage = () => (
  <Box>
    <HeroSection title="Our Services" subtitle="Choose Your Path to Success" />
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Services
      </Typography>
      <DropdownMenu />
    </Box>
  </Box>
);

export default ServicesPage;

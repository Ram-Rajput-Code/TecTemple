import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { Code } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import { FaReact, FaNode  } from "react-icons/fa";

const HomePage = () => (
  <Box>
    <HeroSection
      title="Welcome to TecTemple"
      subtitle="Your Gateway to Success in IT Training"
      backgroundImage="/images/homeBanner.jpg" // Path to the image in the public folder
    />
    <container>
      <Box
        sx={{
          padding: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },

          gap: "10px",
        }}
      >
       <CardComponent
          Icon={IntegrationInstructionsTwoToneIcon}
          title="Basic Programming"
          content="Master HTML, CSS and JS !"
        /> 
       <CardComponent
          Icon={FaReact}
          title="Front-End Development"
          content="Master React.js, !"
        /> 
        <CardComponent
          Icon={FaNode }
          title="Back-End Development"
          content="Master Node.js, Python, and more!"
        />
        <CardComponent
          Icon={Code}
          title="Full Stack Development"
          content="Master, React.js Node.js, MongoDB, and more!"
        />
        
      </Box>
    </container>
  </Box>
);

export default HomePage;

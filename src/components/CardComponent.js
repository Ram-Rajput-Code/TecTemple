import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Code } from "@mui/icons-material"; // Default icon
import AddIcon from '@mui/icons-material/Add';

const CardComponent = ({ title, content, Icon = AddIcon }) => (
  <Card sx={{ minWidth: 275, textAlign: "center" }}>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2, color:"blue" }}>
        
        {Icon && <Icon/>}
      </Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
     
      <Typography variant="body2" color="textSecondary">
        {content}
      </Typography>
    </CardContent>
  </Card>
);

export default CardComponent;

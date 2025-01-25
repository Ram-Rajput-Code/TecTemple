import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary.main",
      color: "white",
      padding: 2,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      &copy; 2025 Tec Temple. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;

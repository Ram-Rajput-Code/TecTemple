import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar
    position="static"
    color="success"
    sx={{ backgroundColor: "rgb(177, 212, 219)" }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: "none", color: "rgb(30,178,166)" }}>
          Tec Temple
        </Link>
      </Typography>
      <IconButton
  href="https://facebook.com"
  target="_blank"
  sx={{
    backgroundColor: "rgb(210,230,236)", // Light-gray background
    color: "rgb(30,178,166)", // Dark green icon color
    margin: "0 0.5rem",
    "&:hover": {
      backgroundColor: "#d3d3d3", // Slightly darker gray on hover
    },
    width: "40px", // Ensures circular shape
    height: "40px",
    borderRadius: "50%",
  }}
>
  <Facebook />
</IconButton>
<IconButton
  href="https://twitter.com"
  target="_blank"
  sx={{
    backgroundColor: "rgb(210,230,236)",
    color: "rgb(30,178,166)",
    margin: "0 0.5rem",
    "&:hover": {
      backgroundColor: "#d3d3d3",
    },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  }}
>
  <Twitter />
</IconButton>
<IconButton
  href="https://linkedin.com"
  target="_blank"
  sx={{
    backgroundColor: "rgb(210,230,236)",
    color: "rgb(30,178,166)",
    margin: "0 0.5rem",
    "&:hover": {
      backgroundColor: "#d3d3d3",
    },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  }}
>
  <LinkedIn />
</IconButton>

    </Toolbar>
  </AppBar>
);

export default Header;

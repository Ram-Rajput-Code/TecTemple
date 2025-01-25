import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        sx={{
          backgroundColor: "rgb(186, 214, 220)", // Transparent light background
          color: "black", // Black text
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              TecTemple
            </Link>
          </Typography>

          {/* Desktop Navbar Links */}
          <Box
            sx={{
              display: { xs: "none", md: "block" }, // Hidden on small screens
            }}
          >
            <Link
              to="/"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              About
            </Link>
            <Link
              to="/services"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Contact
            </Link>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{
              display: { xs: "block", md: "none" }, // Visible on small screens
              color: "black",
            }}
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navbar */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "150px",
            // height:"300px",
            backgroundColor: "rgba(186, 214, 220, 0.85)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </Box>
        <List>
          <ListItem button onClick={toggleDrawer}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <ListItemText primary="Services" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

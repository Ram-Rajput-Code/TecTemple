import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import HeroSection from "../components/HeroSection";

const ContactPage = () => (
  <Box>
    <HeroSection title="Contact Us" subtitle="We'd Love to Hear From You!" />
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <form>
        <TextField fullWidth margin="normal" label="Name" />
        <TextField fullWidth margin="normal" label="Email" />
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  </Box>
);

export default ContactPage;

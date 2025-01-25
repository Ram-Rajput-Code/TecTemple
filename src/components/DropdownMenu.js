import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

const DropdownMenu = ({ menuTitle = "Select Service", items = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ textTransform: "capitalize" }}
      >
        {menuTitle}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;

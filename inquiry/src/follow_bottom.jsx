import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Drawer } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GradingIcon from "@mui/icons-material/Grading";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Form from "./form";
import { useNavigate } from "react-router-dom";

function ButtonApp() {
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  console.log(open, "open");

  return (
    <AppBar position="static" style={{ backgroundColor: "#0F96D0" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon onClick={() => setOpen(true)} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Follow-ups
        </Typography>
        <SearchIcon />
        <GradingIcon />
        <MoreVertIcon />
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <div className="h3">
            <h3>Himanshu Mehta</h3>
          </div>
          <div className="icons">
            <li>
              <PersonIcon /> <span>Profile</span>
            </li>

            <li>
              <SettingsIcon /> <span>Settings</span>
            </li>

            <li>
              <FolderIcon /> <span>Export data to sheet</span>
            </li>

            <li>
              <ExitToAppIcon /> <span>Logout</span>
            </li>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default ButtonApp;

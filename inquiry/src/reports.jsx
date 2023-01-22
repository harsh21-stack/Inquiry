import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Drawer } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PieChart from "./Piechart";
import SimpleBottomNavigation from "./bottombar";
import LineChart from "./linechart";

function Reports() {
  const [open, setOpen] = useState(false);
  console.log(open, "open");
  return (
    <>
      <div className="App">
        <AppBar style={{ backgroundColor: "#0F96D0" }}>
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
              Analytics
            </Typography>

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
      </div>

      <div
        className="buttons"
        style={{
          position: "absolute",
          top: "10vh",
          left: "16vw",
        }}
      >
        <Stack direction="row" spacing={2}>
          <button className="btns">Weekly</button>
          <button className="btns">Monthly</button>
          <button className="btns">Yearly</button>
        </Stack>

        <h3 style={{ position: "fixed", left: "20px" }}>Total Inquiries:</h3>
        <h2 style={{ position: "fixed", left: "20px", top: "20vh" }}>72</h2>
        <PieChart />
        <LineChart />
      </div>
      <div className="footbar">
        <div>
          <SimpleBottomNavigation />
        </div>
      </div>
    </>
  );
}
export default Reports;

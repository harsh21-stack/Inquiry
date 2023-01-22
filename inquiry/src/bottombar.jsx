import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

function SimpleBottomNavigation() {
  const history = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Inquiry"
        icon={<FormatListBulletedOutlinedIcon />}
        onClick={() => history("/Inquiry")}
      />
      <BottomNavigationAction
        label="Follow-up"
        icon={<AccountCircleOutlinedIcon />}
        onClick={() => history("/Follow")}
      />
      <BottomNavigationAction
        label="Reports"
        icon={<DataSaverOffOutlinedIcon />}
        onClick={() => history("/Reports")}
      />
    </BottomNavigation>
  );
}
export default SimpleBottomNavigation;

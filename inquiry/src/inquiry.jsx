import React from "react";
import SimpleBottomNavigation from "./bottombar";
import ButtonAppBar from "./drawer";
import Nav from "./nav";
import Navdata from "./navdata";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

function Inquiry() {
  const history = useNavigate();
  const [manageData, setManageData] = React.useState("all");
  console.log(manageData, "manageData");
  const onChange = (key) => {
    setManageData(key);
  };
  return (
    <>
      <div className="App">
        <div>
          <ButtonAppBar />
          <Nav onChange={onChange} />
        </div>
        <Navdata manageData={manageData} />
        <AddCircleIcon
          style={{
            position: "absolute",
            top: "80vh",
            right: "15px",
            fontSize: "70px",
            color: "#063C53",
          }}
          onClick={() => history("/Form")}
        />
        <div className="footbar">
          <div>
            <SimpleBottomNavigation />
          </div>
        </div>
      </div>
    </>
  );
}
export default Inquiry;

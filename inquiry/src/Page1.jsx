import React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ButtonAppBar from "./drawer";
import SimpleBottomNavigation from "./bottombar";
import { useNavigate } from "react-router-dom";
const data = [
  {
    name: "hello",
    status: "active",
    date: "afsfa",
    description: "affsaf",
  },
];

function Page1() {
  const history = useNavigate();
  return (
    <>
      <div className="App">
        <ButtonAppBar />
        <h1 className="hello">Hello </h1>
        <h1 className="himanshu">Himanshu Mehta🖐 </h1>
        <div>
          <h5 className="h6">Try adding some inquiries by clicking </h5>
          <h5 className="h7">on the + Button.</h5>
        </div>
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

export default Page1;

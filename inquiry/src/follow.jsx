import React, { useState } from "react";
import SimpleBottomNavigation from "./bottombar";

import ButtonApp from "./follow_bottom";
import Nav from "./nav";
import Data from "./Data";
import Navdata from "./navdata";

function Follow() {
  const [manageData, setManageData] = useState("all");
  console.log(manageData, "manageData");
  const onChange = (key) => {
    setManageData(key);
  };
  return (
    <>
      <div className="App">
        <div>
          <ButtonApp />
          <Nav onChange={onChange} />
        </div>
        <Navdata manageData={manageData} />
        <div className="footbar">
          <div>
            <SimpleBottomNavigation />
          </div>
        </div>
      </div>
    </>
  );
}
export default Follow;

import React from "react";
import Data from "./Data";

function Navdata({ manageData }) {
  return Data.map((person) => {
    return (
      <>
        {person.type.includes(manageData) && (
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <h1 key={person.id}>{person.name}</h1>
              <button
                style={{
                  width: "60px",
                  height: "20px",
                  fontSize: "10px",
                  borderRadius: "50px",
                }}
              >
                {person.status}
              </button>
            </div>
            <h3 className="border_bottom">{person.course}</h3>
          </>
        )}
      </>
    );
  });
}
export default Navdata;

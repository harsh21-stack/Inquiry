// please install npm install react-apexcharts apexcharts
import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
function Piechart() {
  const [stdudentSubject, setStudentsubject] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    const sSubject = [];
    const sMarks = [];
    const getStudentdata = async () => {
      const reqData = await fetch("http://localhost/reactgraphtutorial/marks");
      const resData = await reqData.json();
      for (let i = 0; i < resData.length; i++) {
        sSubject.push(resData[i].subject);
        sMarks.push(parseInt(resData[i].marks));
      }
      setStudentsubject(sSubject);
      setStudentMarks(sMarks);
      //console.log(resData);
    };

    getStudentdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <Chart
          className="chart"
          type="pie"
          series={[25, 20, 27]}
          options={{
            noData: { text: ["Active", "Converted", "Rejected"] },
            // colors:["#f90000","#f0f"],
            labels: ["Active", "Converted", "Rejected"],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;

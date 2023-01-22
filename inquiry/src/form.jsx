import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Form() {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    Name: "",
    contact: "",
    age: "",
    course: "",
    date: "",
    reference: "",
    std: "",
  });
  const [error, setError] = useState();

  const Clear = () => {
    setInpval({
      Name: "",
      contact: "",
      age: "",
      course: "",
      date: "",
      reference: "",
      std: "",
    });
  };

  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { Name, contact, age, course, date } = inpval;
    if (!Name && !contact && !age && !course && !date) {
      setError("please filled required fields");
      console.log(error);
      return;
    } else {
      setError("");
    }

    const getuserArr = localStorage.setItem(
      "useryoutube",
      JSON.stringify(inpval)
    );
    console.log(getuserArr);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "1vw",
        }}
      >
        <CloseIcon onClick={() => history("/Page1")} />
        <h1 className="form_title">Add New Inquiry</h1>
        <button
          onClick={Clear}
          style={{
            width: "20vw",
            height: "5vh",
            background: "white",
            color: " black",
            border: "none",
            fontSize: "18px",
          }}
        >
          clear all
        </button>
      </div>
      <form className="form">
        <div id="span">
          <div>
            <span className="margin">
              Full Name<label style={{ color: "red" }}>*</label>
            </span>
            <input
              type="Name"
              name="Name"
              value={inpval.Name}
              placeholder="e.g Dakshit M. Patel"
              onChange={getdata}
              style={{
                width: "93vw",
                borderRadius: "4px",
                border: "none",
                marginLeft: "5px",
                height: "4vh",
                background: " #f2f5f5",
              }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", columnGap: "5vw" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="margin">
                Contact No.<label style={{ color: "red" }}>*</label>
              </span>
              <input
                type="Number"
                name="contact"
                value={inpval.contact}
                placeholder="e.g 9157275971"
                onChange={getdata}
                style={{
                  width: "65vw",
                  borderRadius: "4px",
                  border: "none",
                  marginLeft: "5px",
                  height: "4vh",
                  background: " #f2f5f5",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="margin">
                Age<label style={{ color: "red" }}>*</label>
              </span>
              <input
                type="Number"
                name="age"
                value={inpval.age}
                placeholder="10"
                onChange={getdata}
                style={{
                  display: "flex",
                  width: "20vw",
                  borderRadius: "4px",
                  border: "none",
                  marginLeft: "5px",
                  height: "4vh",
                  background: " #f2f5f5",
                }}
              />
            </div>
          </div>
          <div>
            <span className="margin">
              Course<label style={{ color: "red" }}>*</label>
            </span>
            <select
              type="Name"
              name="course"
              value={inpval.course}
              placeholder="select subject"
              onChange={getdata}
              style={{
                width: "95vw",
                borderRadius: "4px",
                border: "none",
                marginLeft: "5px",
                height: "4vh",
                background: " #f2f5f5",
              }}
            >
              <option>select subject..</option>
              <option>C language</option>
              <option>Java</option>
              <option>Python</option>
              <option>JS</option>
              <option>React js</option>
              <option>Node js</option>
              <option>php</option>
            </select>
          </div>
          <div>
            <span className="margin">
              Date<label style={{ color: "red" }}>*</label>
            </span>

            <input
              type="date"
              name="date"
              value={inpval.date}
              placeholder="select date"
              onChange={getdata}
              style={{
                display: "flex",
                width: "93vw",
                borderRadius: "4px",
                border: "none",
                marginLeft: "5px",
                height: "4vh",
                background: " #f2f5f5",
              }}
            />
          </div>
          <div>
            <span className="margin">Reference by</span>
            <input
              type="Name"
              name="reference"
              value={inpval.reference}
              placeholder="Institute or Person Name"
              onChange={getdata}
              style={{
                width: "93vw",
                borderRadius: "4px",
                border: "none",
                marginLeft: "5px",
                height: "4vh",
                background: " #f2f5f5",
              }}
            />
          </div>
          <div>
            <span className="margin">Std</span>
            <input
              type="Number"
              name="std"
              value={inpval.std}
              placeholder="12,11 commerce,9 etc.."
              onChange={getdata}
              style={{
                width: "93vw",
                borderRadius: "4px",
                border: "none",
                marginLeft: "5px",
                height: "4vh",
                background: " #f2f5f5",
              }}
            />
          </div>
        </div>
        <button
          variant="primary"
          className="add_inquiry"
          onClick={addData}
          style={{ background: "#063C53" }}
          type="submit"
        >
          Add Inquiry
        </button>
      </form>
    </>
  );
}
export default Form;

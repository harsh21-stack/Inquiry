import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [data, setData] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { email, password } = inpval;
    if (!email && !password) {
      setError("please filled required fields");

      return;
    } else {
      setError("");
    }

    const getuserArr = localStorage.setItem(
      "useryoutube",
      JSON.stringify(inpval)
    );
    console.log(getuserArr);
    history("/Page1");

    //   if (email === "") {
    //       alert('email field is requred', {
    //           position: "top-center",
    //       });
    //   } else if (!email.includes("@")) {
    //       alert('plz enter valid email addres', {
    //           position: "top-center",
    //       });
    //   } else if (password === "") {
    //      alert('password field is requred', {
    //           position: "top-center",
    //       });
    //   } else if (password.length < 5) {
    //      alert('password length greater five', {
    //           position: "top-center",
    //       });
    //   } else {

    //       if (getuserArr && getuserArr.length) {
    //           const userdata = JSON.parse(getuserArr);
    //           const userlogin = userdata.filter((el, k) => {
    //               return el.email === email && el.password === password
    //           });
    //           console.log(userlogin,'userlogin');

    //           if (userlogin.length === 0) {
    //               alert("invalid details")
    //           } else {
    //               console.log("user login succesfulyy");
    //               history("Page1/")

    //               localStorage.setItem("user_login", JSON.stringify(userlogin))

    //           }
    //       }
    //   }
  };

  console.log(error, "error");

  return (
    <div className="App">
      <img src="main_pic.png" className="img"></img>
      <h1 className="login">Log In</h1>
      <h6
        style={{
          position: "fixed",
          top: "46vh",
          left: "13vw",
        }}
      >
        LogIn with the credentials given by the organization{" "}
        <a href="https://support.google.com/?hl=en" alt="Help">
          Help
        </a>
      </h6>
      <br />
      <form className="form">
        <div id="label">
          <span className="margin">
            User Id<label style={{ color: "red" }}>*</label>
          </span>
          <input
            type="email"
            name="email"
            onChange={getdata}
            placeholder="Enter email"
            style={{
              width: "90vw",
              border: "none",
              height: "4vh",
              background: " #80989D",
            }}
            className="hug"
          />
          <br />
        </div>
        <br />
        <div id="label">
          <span className="margin">
            Password<label style={{ color: "red" }}>*</label>
          </span>
          <input
            type="password"
            name="password"
            onChange={getdata}
            placeholder="Password"
            className="hug"
            style={{
              width: "90vw",
              height: "4vh",
              border: "none",
              background: "#80989D",
            }}
          />
        </div>{" "}
        <br />
        <button
          variant="primary"
          className="btn"
          onClick={addData}
          style={{ background: "#063C53" }}
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;

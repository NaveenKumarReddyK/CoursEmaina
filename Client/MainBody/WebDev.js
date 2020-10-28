import React from "react";
import CourseCardHolder from "../component/CourseCardHolder";
import LevelChecker from "../component/LevelChecker";
import CompilerGrid from "../component/CompilerGrid";
import Footer from "../component/Footer";
import WebDevNav from "../component/WebDevNav";
import LoginPage from "../component/Authentication/LoginPage";

import axios from "axios";

class WebDev extends React.Component {
  constructor(props) {
    super(props);
  }
  // ###################################################
  componentDidMount() {
    axios
      .get("http://localhost:4000/coursemaina/checking/isloggedin", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resLogData) => {
        const msg = resLogData.data.Login_Msg;
        if (msg === "User not LoggedIn") {
          window.location.href = "http://localhost:3000/coursemaina/login";
          
        }
        console.log(msg);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }
  //####################################################

  render() {
    return (
      <div>
        <WebDevNav />
        <LevelChecker />
        <CompilerGrid />
        <Footer />
      </div>
    );
  }
}

export default WebDev;

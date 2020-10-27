import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CourseCard from "./component/CourseCard";
import CourseCardHolder from "./component/CourseCardHolder";
import LevelChecker from "./component/LevelChecker";
import CompilerGrid from "./component/CompilerGrid";
import Feedback from "./component/Feedback";
import Footer from "./component/Footer";
import TechNewsCard from "./component/TechNewsCard";
import TechNewsCardHolder from "./component/TechNewsCardHolder";
import MainNavBar from "./component/MainNavBar";
import WebDevNav from "./component/WebDevNav";
import CourseDetails from "./component/CourseDetails";
import LandingPageComponent from "./component/LandingPageComponent";
import CourseCategoryCard from "./component/CourseCategoryCard";
import CourseCategoryHolder from "./component/CourseCategoryHolder";
import MainPage from "./MainBody/MainPage";
import WebDev from "./MainBody/WebDev";
import LevelQuiz from "./component/LevelQuiz";
import ErrorPage from "./MainBody/ErrorPage";
import ProfilePage from "./MainBody/ProfilePage";
import CartPage from "./MainBody/CartPage";
import LoginPage from "./component/Authentication/LoginPage";
import SignUpPage from "./component/Authentication/SignupPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/coursemaina" component={MainPage} />
        <Route path="/coursemaina/login" component={LoginPage} />
        <Route path="/coursemaina/signup" component={SignUpPage} />
        <Route path="/coursemaina/home" component={MainPage} />
        <Route path="/coursemaina/webdev" component={WebDev} />
        <Route path="/coursemaina/profile" component={ProfilePage} />
        <Route path="/coursemaina/cart" component={CartPage} />
        <Route path="/coursemaina/quiz" component={LevelQuiz} />
        <Route path="/coursemaina/*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

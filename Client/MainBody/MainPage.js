import React from "react";
import CompilerGrid from '../component/CompilerGrid';
import Footer from "../component/Footer";
import TechNewsCardHolder from "../component/TechNewsCardHolder";
import MainNavBar from "../component/MainNavBar";
import LandingPageComponent from "../component/LandingPageComponent";
import CourseCategoryHolder from "../component/CourseCategoryHolder";
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <LandingPageComponent />
        <CourseCategoryHolder />
        <TechNewsCardHolder />
        <CompilerGrid />
        <Footer />
      </div>
    );
  }
}

export default MainPage;

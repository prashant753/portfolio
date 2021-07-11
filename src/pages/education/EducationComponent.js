import React, { Component } from "react";

import { Fade } from "react-reveal";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { experience } from "../../portfolio.js";
import EducationImg from "./EducationImg";
import Educations from "../../containers/education/Educations";

import "./Experience.css";


class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  Education
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Basic Qualification and Certifcations
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;

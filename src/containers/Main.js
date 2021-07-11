import React, { Component } from "react";

import {
  Route,
  Switch,
} from "react-router-dom";

import Contact from "../pages/contact/ContactComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Home from "../pages/home/HomeComponent";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme); 
      return (
        <div>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/education"
                exact
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              {/* <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              /> */}
            </Switch>
        </div>
      )
    }
}

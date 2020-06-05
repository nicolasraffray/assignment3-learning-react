import React, { Component } from "react";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import NotFound from "./containers/404/404";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/courses">Courses </Link>
          <br></br>
          <Link to="/users"> Users</Link>
          <Switch>
            <Route path="/users" component={Users}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Redirect from="/all-courses" to="/courses"></Redirect>
            <Route component={NotFound} />
          </Switch>
        </div>
        <ol style={{ textAlign: "left" }}>
          <li>
            ! DONE ! Add Routes to load "Users" and "Courses" on different pages
            (by entering a URL, without Links)
          </li>
          <li>
            ! DONE ! Add a simple navigation with two links => One leading to
            "Users", one leading to "Courses"
          </li>
          <li>
            ! DONE ! Make the courses in "Courses" clickable by adding a link
            and load the "Course" component in the place of "Courses" (without
            passing any data for now)
          </li>
          <li>
            ! DONE ! Pass the course ID to the "Course" page and output it there
          </li>
          <li>
            !Done! Pass the course title to the "Course" page - pass it as a
            param or score bonus points by passing it as query params (you need
            to manually parse them though!)
          </li>
          <li>
            !Done! Load the "Course" component as a nested component of
            "Courses"
          </li>
          <li>
            {" "}
            !Done! Add a 404 error page and render it for any unknown routes
          </li>
          <li>
            ! Done ! Redirect requests to /all-courses to /courses (=> Your
            "Courses" page)
          </li>
        </ol>
      </div>
    );
  }
}

export default App;

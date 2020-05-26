import React, { Component } from "react";
import { Route } from "react-router-dom";
import Users from "../Users/Users";
import { Link } from "react-router-dom";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article className="Course" key={course.id}>
                {course.title}
                <Link to={"" + course.id}> Go to Course</Link>
              </article>
            );
          })}
        </section>
        <Route path="/users" render={() => <Users />} />
      </div>
    );
  }
}

export default Courses;

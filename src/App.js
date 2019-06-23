import React, { Component } from "react";
import Course from "./components/course";
import "./App.css";
import witCrest from "./wit_crest.png";

class App extends Component {
  render() {
    const modules = [
      {
        name: "Web Dev",
        noLectures: 1,
        noPracticals: 2
      },
      {
        name: "Programming",
        noLectures: 2,
        noPracticals: 3
      },
      {
        name: "Database Systems",
        noLectures: 2,
        noPracticals: 2
      },
      {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2
      },
      {
        name: "Enterprise Web Dev",
        noLectures: 2,
        noPracticals: 3
      }
    ];
    let name = "HDip Computer Systems";

    return (
        <div>
          <header className="App-header">
            <img src={witCrest} alt="logo" />
          </header>
          <div className="course">
            <Course title={name} modules={modules} />
          </div>
        </div>
    );
  }
}
export default App;
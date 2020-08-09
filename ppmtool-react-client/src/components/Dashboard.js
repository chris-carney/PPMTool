import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import Header from "./Layout/Header";

export default class Dashboard extends Component {
  render() {
    return (
    <div>
      <h1>Welcome to the dash</h1>
      <ProjectItem />
    </div>
    )

}
}

import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
              Todo App
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down" />
          </div>
        </nav>
      </div>
    );
  }
}

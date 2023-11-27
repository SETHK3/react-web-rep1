import { Component } from "react";

import BarryLogo from "../images/Barry.png";

class NavSidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="logo-top">
          <img src={BarryLogo} alt="" />
        </div>
        <div className="nav-btn">
          <button>Nav Button</button>
          <button>Nav Button</button>
          <button>Nav Button</button>
          <button>Nav Button</button>
          <button>Nav Button</button>
        </div>
        <div className="logo-bottom">
          <img src={BarryLogo} alt="" />
        </div>
      </div>
    );
  }
}

export default NavSidebar;

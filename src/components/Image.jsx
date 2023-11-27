import { Component } from "react";

import LastWeekImage from "../images/LastWeekTonight.png";

class Image extends Component {
  render() {
    return (
      <div className="image">
        <img src={LastWeekImage} alt="" />
      </div>
    );
  }
}

export default Image;

import { Component } from "react";

import Image from "./components/Image";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ButtonMain from "./components/ButtonMain";
import Copyright from "./components/Copyright";
import NavSidebar from "./components/NavSideBar";

import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="sidebar">
          <NavSidebar />
        </div>
        <div className="page-top">
          <Image />
          <Header />
          <SubHeader />
        </div>
        <div className="main-content1">
          <MainContent />
        </div>
        <div className="squares">
          <div className="square1">
            <MainContent />
          </div>
          <div className="square2">
            <Image />
          </div>
          <div className="square3">
            <MainContent />
          </div>
          <div className="square4">
            <Image />
          </div>
        </div>
        <div className="button-main">
          <ButtonMain />
        </div>
        <div className="copyright">
          <Copyright />
        </div>
      </div>
    );
  }
}

export default App;

//import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//3-1
import Data from "./components/Data.json";
import SelectedBeast from "./components/SelectedBeast";
import HornedBeast from "./components/HornedBeast";

//
class App extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      //
      hornedData: Data,
      titleData: "",
      imgData: "",
      desData: "",
      show: false,

      //
    };
  }
  //
  handleClose = () => {
    this.setState({ show: false });
  };
  showing = (title, img, des) => {
    this.setState({
      titleData: title,
      imgData: img,
      desData: des,

      show: true,
    });
  };
  //
  render() {
    return (
      <div>
        <Header />
        //
        <Main hornedDataMain={this.state.hornedData} showe={this.showing} />
        //
        <SelectedBeast
          selectTitleData={this.state.titleData}
          selectImgData={this.state.imgData}
          selectDesData={this.state.desData}
          modalShowFunction={this.state.show}
          handleClose={this.handleClose}
        />
        //
        <HornedBeast showe={this.showing} />
        <Footer />
      </div>
    );
  }
}

export default App;

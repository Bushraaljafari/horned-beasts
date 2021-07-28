import React from "react";
import HornedBeast from "./HornedBeast";
//---21
//import Data from "./Data.json";

class Main extends React.Component {
  
  dataFunction = (title, img, des) => {
    this.props.showe(title, img, des);};

  render() {
    return (
      <>
        {this.props.hornedDataMain.map((item) => {
          return (
            <>
              <HornedBeast
                title={item.title}
                img={item.image_url}
                description={item.description}
                prop2Function={() =>
                  this.dataFunction(
                    item.title,
                    item.img,
                    item.description
                  )
                }

              />
              
            </>
          );
        })}
       
      </>
    );
  }
}

export default Main;

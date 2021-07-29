import React from "react";
import HornedBeast from "./HornedBeast";
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";

//---21
import Data from "./Data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByNumbersOfHorns: Data,
    };
  }

  dataFunction = (title, img, des) => {
    this.props.showe(title, img, des);
  };
  toChangeData = (event) => {
    let horns = event.target.value;
    let newArray = this.props.hornedDataMain.filter((num) => {
      if (horns === "All") {
        return num;
      } else if (horns === "1") {
        return num;
      } else if (horns === "2") {
        return num;
      } else if (horns === "3") {
        return num;
      } else if (horns === "100") {
        return num;
      }
    });
    this.setState({ filterByNumbersOfHorns: newArray });
    console.log(newArray);

    render()
    {
      return (
        <>
          <Form /*aria-label="Default select example"*/>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Numbers of Horns</Form.Label>
              <Form.Select
                as="select"
                name="hornes"
                onChange={this.toChangeData}
                // onChange={(event)=>this.toChangeData(event)}
              >
                <option>Open this select menu</option>
                <option value="ALL">ALL</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100😲</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <CardColumns>
            {this.props.hornedDataMain.map((item) => {
              return (
                <>
                  <HornedBeast
                    title={item.title}
                    img={item.image_url}
                    description={item.description}
                    prop2Function={() =>
                      this.dataFunction(item.title, item.img, item.description)
                    }
                  />
                </>
              )
            })}
           </CardColumns>
        </>
      )
    }
  
}

export default Main;

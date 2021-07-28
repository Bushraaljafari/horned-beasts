import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
//
import Button from "react-bootstrap/Button";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  favoritImgeNum = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  //
  prop3Function = (para1, para2, para3) => {
    this.props.prop2Function(para1, para2, para3);
  }; //

  render() {
    console.log(this.props);
    return (
      <div>
        {/*<h2> {this.props.title}📓 </h2>
                <p>{this.props.description}</p>
                <img src={this.props.img} alt={this.props.title} title={this.props.title}/>
                <p>favorited❤️:{this.state.counter}</p>*/}

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img onClick={this.favoritImgeNum} src={this.props.img} />
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>description📓: {this.props.description}</Card.Text>
            <Card.Text>favorited❤️:{this.state.counter}</Card.Text>
            <Button
              onClick={() => this.prop3Function(555, 77, 88)}
              variant="primary"
            >
              show me{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeast;

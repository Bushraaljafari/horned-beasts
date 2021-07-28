import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  

  render() {
    // i use Live demo from react-bootstraps/models
    return (
      <>
        {/*<Button variant="primary" onClick={handleShow}>
                Launch demo modal
        </Button>*/}

        <Modal show={this.props.modalShowFunction}>
          <Modal.Header>
            {this.props.selectTitleData}
            <Modal.Title> Horned Beast </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <img
              onClick={this.props.favoritImgeNum} 
              src={this.props.selectImgData}
              alt=""
              style={{ width: "450px", height: "400px" }}
            ></img>
          </Modal.Body>
          <Modal.Footer>
            {this.props.selectDesData}
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;

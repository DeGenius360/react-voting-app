import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";
import VoteSpecial from "./VoteSpecial";

class SpecialModal extends Component {
  state = {
    modal12: this.props.status,
    modal9: false,
  };

  toggle =
    (nr, close = null) =>
    () => {
      let modalNumber = "modal" + nr;
      this.setState({
        [modalNumber]: !this.state[modalNumber],
      });

      if (close === true) return window.location.reload();
    };

  render() {
    return (
      <MDBContainer>
        <button
          className="btn btn-group mx-auto text-center mb-3 "
          style={{ backgroundColor: "#2E2E2E", color: "white" }}
          onClick={this.toggle(12)}
          hidden={false}
        >
          Proceed to Payment
        </button>
        <MDBModal
          isOpen={this.state.modal12}
          toggle={this.toggle(12)}
          position="top"
          size="lg"
          disableBackdrop
        >
          <MDBModalBody>
            <VoteSpecial nominee={this.props.nominee} />
          </MDBModalBody>
          <MDBModalFooter>
            <button
              color="danger"
              onClick={this.toggle(12, true)}
              size="sm"
              className="btn btn-group "
              style={{ backgroundColor: "red" }}
            >
              Close
            </button>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SpecialModal;

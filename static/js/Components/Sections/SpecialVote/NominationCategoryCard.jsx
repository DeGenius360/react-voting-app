import React, { Component } from "react";

class NominationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="card " style={{ backgroundColor: "#2E2E2E" }}>
          <div className="card-body">
            <div
              className="mx-auto text-center mb-2"
              style={{ color: "goldenrod" }}
            >
              From Jun 07, 2021 - Aug 20, 2021
            </div>

            <h5
              className=" mx-auto text-center  text-uppercase"
              style={{ color: "goldenrod" }}
            >
              {this.props.category}
            </h5>

            <h6
              className="mx-auto text-center text-uppercase mt-2"
              style={{ color: "goldenrod" }}
            >
              UMeX Awards 21
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default NominationCard;

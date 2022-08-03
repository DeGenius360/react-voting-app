import React, { Component } from "react";

class Vote extends Component {
  render() {
    return (
      <div className="form-group">
        {/* <label class="custom-control-label" >Toggle the first option</label> */}

        <label class="btn" style={{ backgroundColor: "#4B515D" }}>
          <input
            type="radio"
            name="nominee"
            id="nominee"
            value={this.props.value}
            onChange={this.props.onChange}
            // className="form-control"
          />
          <i class="fas fa-circle-o fa-2x"></i>
          <i class="fas fa-dot-circle-o fa-2x"></i>
          <span>
            {" "}
            <i
              className="fas fa-vote-yea"
              for="nominee"
              style={{ color: "#00C851" }}
            ></i>{" "}
          </span>
        </label>
      </div>
    );
  }
}

export default Vote;

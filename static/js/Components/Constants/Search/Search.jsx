import React, { Component } from "react";
import { MDBCol, MDBIcon, MDBContainer } from "mdbreact";
class Search extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCol md="12">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span
                className="input-group-text  lighten-3"
                id="basic-text1"
                style={{ backgroundColor: "#2BBBAD" }}
              >
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder={this.props.label}
              aria-label="Search"
              name={this.props.name}
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
        </MDBCol>
      </MDBContainer>
    );
  }
}

export default Search;

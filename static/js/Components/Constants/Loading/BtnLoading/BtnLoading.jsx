import React, { Component } from "react";
import RiseLoader from "react-spinners/ScaleLoader";
class BtnLoading extends Component {
  render() {
    return (
      <>
        <RiseLoader margin={2} size={5} color={"black"} loading={true} />
      </>
    );
  }
}

export default BtnLoading;

import React, { Component } from "react";
import RiseLoader from "react-spinners/FadeLoader";
class ViewLoading extends Component {
  render() {
    return (
      <>
        <RiseLoader margin={1} size={30} color={"black"} loading={true} />
      </>
    );
  }
}

export default ViewLoading;

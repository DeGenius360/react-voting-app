import React, { Component } from "react";
import SpecialVoteLayout from "../../Constants/Layouts/Dashboard/DEAN/DeanLayout";
import ViewResults from "../../Dashboard/Staff/Common/Votes/View";

class WelcomeSpecial extends Component {
  render() {
    return (
      <SpecialVoteLayout>
        <ViewResults />
      </SpecialVoteLayout>
    );
  }
}

export default WelcomeSpecial;

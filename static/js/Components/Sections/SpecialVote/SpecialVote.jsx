import React, { Component } from "react";
import SpecialVoteLayout from "../../Constants/Layouts/Dashboard/DEAN/DeanLayout";
import Nominee from "./Nominees";
import SpecialModal from "./SpecialVoteModa";
import NominationCard from "./NominationCategoryCard";

class SpecialVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominee: "",
      category: this.props.data && this.props.data._id,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const { data } = this.props;
    let sum = 0;
    data &&
      data.nominees &&
      // eslint-disable-next-line
      data.nominees.map((e) => {
        sum += e.vote;
        sum += e.special_vote;
      });

    return (
      <SpecialVoteLayout>
        <NominationCard category={data && data._id} />
        <div className="row">
          {data &&
            data.nominees.map((e) => (
              <div className="col-lg-3 col-md-3">
                <Nominee
                  {...e}
                  category={data && data._id}
                  total_vote={sum}
                  onChange={this.handleChange}
                />
              </div>
            ))}
        </div>
        {this.state.nominee ? (
          <div className="row mx-auto text-center">
            <SpecialModal nominee={this.state.nominee} />
          </div>
        ) : (
          ""
        )}
      </SpecialVoteLayout>
    );
  }
}

export default SpecialVote;

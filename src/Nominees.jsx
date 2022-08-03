import { MDBBadge } from "mdbreact";
import React, { Component } from "react";
import Vote from "./vote";
// import VoteSpecial from "./VoteSpecial";

class Nominee extends Component {
  render() {
    console.log(this.props.special_vote);
    console.log(this.props.vote);
    console.log(this.props.total_vote);
    const {
      name,
      profile_picture,
      _id,
      category,
      isValid,
      special_vote,
      vote,
      total_vote,
    } = this.props;
    return (
      <div className="mt-3">
        <div className="container-fluid bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={profile_picture}
                    className="img-polaroid profile-img img-thumbnail "
                    alt="profile_picturea"
                  />
                  <span>
                    <h6>
                      <i>
                        <b color="#212121">{name}</b>
                      </i>
                    </h6>
                    <MDBBadge
                      color={`${
                        ((special_vote + vote) / total_vote) * 100 < 50
                          ? "danger"
                          : "success"
                      }`}
                      className="ml-2"
                    >
                      {total_vote < 0
                        ? ((special_vote + vote) / total_vote) * 100 < 50
                        : 0}
                      % <sup>votes</sup>
                    </MDBBadge>
                  </span>
                </div>

                <div className="col-md-12  text-center">
                  <div className="row">
                    <div className="col-md-12">
                      {/* <div className="alert alert-success pull-right hide"> */}
                      {isValid ? (
                        ""
                      ) : (
                        <Vote
                          nominee={name}
                          value={_id}
                          category={category}
                          onChange={this.props.onChange}
                        />
                      )}
                      {/* </div> */}
                    </div>
                  </div>

                  <div className="row lead">
                    <div className="col-md-12  text-center">
                      <div id="stars" className="starrr text-warning"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nominee;

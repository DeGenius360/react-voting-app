import React, { Component } from "react";
import { usePaystackPayment } from "react-paystack";
import { connect } from "react-redux";
import { GenerateReference } from "../../../Store/Actions/common/voteAction";
class VoteSpecial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 1,
      nominee: this.props.nominee,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  refreshPage = () => {
    window.location.reload();
  };

  SpecialVoting = () => {
    this.props.GenerateReference(this.state);
  };
  render() {
    const Config = {
      reference: new Date().getTime(),
      email: "japhetkuntublankson1@gmail.com",
      firstname: "paymentbyumex",
      amount: this.state.votes * 100,
      publicKey: "pk_test_adf914ae0b3ce7208168759b21e23044873e80bf",
      currency: "GHS",
    };
    const onSuccess = (reference) => {
      this.SpecialVoting();
      // Implementation for whatever you want to do with reference and after success call.
      setTimeout(() => {
        return this.refreshPage();
      }, 1000);
    };

    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      return this.refreshPage();
    };

    const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(Config);
      const verify = (succes, close) => {
        return initializePayment(succes, close);
      };
      return (
        <div>
          <button
            // color="white"
            style={{ backgroundColor: "#2E2E2E", color: "white" }}
            className="btn btn-group"
            rounded
            onClick={() => {
              verify(onSuccess, onClose);
            }}
          >
            Submit Vote
          </button>
        </div>
      );
    };
    return (
      <div>
        <span>
          <label>
            <b> Enter Number of Votes</b>
          </label>
          <input
            type="number"
            name="votes"
            value={this.state.votes}
            onChange={this.handleChange}
            id=""
            className="form-control mx-auto text-center mb-3 "
          />
        </span>

        <br />
        {this.state.vote !== "Select Number of Votes" ? (
          <PaystackHookExample />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(null, { GenerateReference })(VoteSpecial);

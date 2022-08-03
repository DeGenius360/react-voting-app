import React from "react";
import {
  // MDBInput,
  // MDBBtn,
  MDBIcon,
  // MDBCardBody,
  // MDBRow,
  // MDBCol,
  // MDBContainer,
} from "mdbreact";
import { connect } from "react-redux";
import { clearErrors } from "../../../Store/Actions/common/errorAction";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../Store/Actions/common/authAction";
import BtnLoading from "../../Constants/Loading/BtnLoading/BtnLoading";
import "./auth.css";
class Login extends React.Component {
  state = {
    password: "",
    reference_number: "",
    ntf: null,
    msg: null,
    loading: false,
  };
  componentDidUpdate(prevProps) {
    const { error, success } = this.props;

    //Login Success;
    if (success !== prevProps.success) {
      if (success.id === "LOGIN_SUCCESS") {
        this.setState({
          ntf: success.ntf,
          loading: false,
        });
      }
    }

    // Check for login Errors;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg,
          loading: false,
        });
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
    this.props.loginUser(this.state);

    setTimeout(() => {
      if (this.props.loggedIn)
        if (this.props.user.rank === "admin") {
          this.props.history.push("/dashboard/admin");
        }
      if (this.props.user.rank === "student") {
        this.props.history.push("/dashboard/student");
      }
    }, 2000);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      msg: null,
      ntf: null,
      loading: false,
    });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <div className="login_center"></div> */}
        <form onSubmit={this.handleSubmit}>
          {this.state.msg || this.state.ntf ? (
            <span
              className={`alert ${
                this.state.msg
                  ? "alert-danger alert-error"
                  : "alert-success alert-success"
              } mx-auto`}
            >
              {this.state.msg
                ? this.state.msg
                : this.state.ntf
                ? this.state.ntf
                : ""}
            </span>
          ) : (
            ""
          )}

          {/* <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBInput
                  // className="white-text"
                  icon="envelope-open"
                  value={this.state.reference_number}
                  onChange={this.handleChange}
                  type="text"
                  id="materialFormRegisterConfirmEx3"
                  name="reference_number"
                  label="Your Reference Number"
                  outline
                  required
                ></MDBInput>

                <MDBInput
                  // iconClass="white-text"
                  icon="lock"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  id="materialFormRegisterNameEx"
                  label="Password"
                  outline
                  required
                ></MDBInput>
              </MDBCol>

              <button
                color="primary"
                type="submit"
                className="mx-auto block btn btn-group"
                style={{ backgroundColor: "GrayText" }}
                disabled={this.state.loading}
                size="md"
              >
                {this.state.loading ? (
                  <BtnLoading />
                ) : (
                  <>
                    {" "}
                    Login <MDBIcon far icon="paper-plane" className="ml-2" />
                  </>
                )}
              </button>
            </MDBRow>
          </MDBCardBody> */}

          <div className="txt_field mt-5">
            <input
              type="text"
              value={this.state.reference_number}
              onChange={this.handleChange}
              id="materialFormRegisterConfirmEx3"
              name="reference_number"
              required
            />
            <span></span>
            <label htmlFor="text">Reference Number</label>
          </div>
          <div className="txt_field">
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              type="password"
              required
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <button
            color="primary"
            type="submit"
            className="mx-auto block login_btn"
            disabled={this.state.loading}
            size="md"
          >
            {this.state.loading ? (
              <BtnLoading />
            ) : (
              <>
                {" "}
                Login <MDBIcon far icon="paper-plane" className="ml-2" />
              </>
            )}
          </button>

          <div className="spec_voting">
            <p>
              Want to cast more votes for your fav personality?{" "}
              <a href="/special-view">Click Here</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    loggedIn: state.auth.loggedIn,
    error: state.error,
    user: state.auth.user,
    success: state.success,
    loading: state.auth.loading,
  };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, clearErrors })(Login)
);

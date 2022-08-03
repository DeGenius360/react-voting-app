import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Loadinscreen.css";
import RiseLoader from "react-spinners/FadeLoader";
import { loadUser } from "../../../../Store/Actions/common/authAction";
import { connect } from "react-redux";
import Routes from "../../../Routes/Routes";
class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetcheddata = () => {
    this.props.loadUser();
  };

  componentDidMount() {
    this.fetcheddata();
  }
  render() {
    return (
      <div>
        {!this.props.authLoaded ? (
          <div className="Loading-header">
            <RiseLoader margin={1} size={30} color={"black"} loading={true} />{" "}
          </div>
        ) : (
          <Routes />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    authLoaded: state.auth.isLoaded,
  };
};
export default connect(mapStateToProps, { loadUser })(LoadingScreen);

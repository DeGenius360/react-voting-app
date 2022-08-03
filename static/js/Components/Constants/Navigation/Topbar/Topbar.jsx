import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../../Store/Actions/common/authAction";
// import MessageModal from "./MessageModal";
// import NotificationModal from "./NotificationModal";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  logout = () => {
    this.props.logoutUser();
    setTimeout(() => {
      return window.location.reload();
    }, 500);
  };
  render() {
    const { user } = this.props.user;

    let link;

    if (user && user.rank === "admin") {
      link = "/dashboard/admin";
    } else if (user && user.rank === "student") {
      link = "/dashboard/student";
    } else {
      link = "/";
    }

    const LoggedIn = (
      <>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret right>
              <span className="mr-2">
                {" "}
                <small>Welcome {user && user.reference_number}</small>{" "}
                <MDBIcon icon="user" />
              </span>
            </MDBDropdownToggle>

            <MDBDropdownMenu right>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              <MDBDropdownItem className="text-center mx-auto"></MDBDropdownItem>
              {/* <MDBDropdownItem href="#!" className="text-center mx-auto">
                Profile <MDBIcon icon="user" />
              </MDBDropdownItem> */}
              <MDBDropdownItem
                onClick={this.logout}
                className="text-center mx-auto red-text"
              >
                Logout <MDBIcon icon="sign-out-alt" />
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
        <MDBNavItem></MDBNavItem>
      </>
    );
    const LoggedOut = (
      <>
        <MDBNavItem>
          <Link to="/login" style={{ color: "white" }}>
            Login{" "}
          </Link>
        </MDBNavItem>
      </>
    );

    return (
      <div>
        <MDBNavbar
          color="elegant-color"
          dark
          expand="md"
          className="white-text"
        >
          <Link to={link}>
            <MDBNavbarBrand>UMeX</MDBNavbarBrand>
          </Link>
          <Link to="/special-view">
            <MDBNavbarBrand>Special Voting</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem></MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {localStorage.getItem("user") ? LoggedIn : LoggedOut}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, { logoutUser })(TopBar);

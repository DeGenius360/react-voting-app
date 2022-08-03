import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getNomineesByCategory } from "../../../../../Store/Actions/common/nomineeAction";
// import { NomineeData } from "../../../../Sections/SpecialVote/Data/Nominee";
import Footer from "../../../Navigation/Footer/Footer";

import NavItems from "../../../Navigation/Sidebar/NavItem";
import SideBar from "../../../Navigation/Sidebar/Sidebar";
import Topbar from "../../../Navigation/TopBar/Topbar";

class StudentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  API = () => {
    this.props.getNomineesByCategory();
  };

  componentDidMount() {
    this.API();
  }
  render() {
    const { categories } = this.props;

    return (
      <>
        {/* Top Navbar */}
        <Topbar />
        <MDBRow className="mr-0">
          <MDBCol md="2" className="mx-auto text-center">
            {/* Side Bar */}
            <SideBar>
              {/* <NavItems name="Welcome" link="/dashboard/student" icon="smile" /> */}
              {categories &&
                categories.map((e) => (
                  <NavItems
                    name={e._id}
                    link={`/dashboard/student/voting/${
                      e._id && e._id.toLowerCase().split(" ").join("-")
                    }`}
                    icon="vote-yea"
                  />
                ))}
            </SideBar>
          </MDBCol>
          <MDBCol md="10" className="mb-5">
            {/* Children */}
            {this.props.children}
          </MDBCol>
        </MDBRow>
        {/* Footer */}
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.nominee.items,
  };
};

export default connect(mapStateToProps, { getNomineesByCategory })(
  StudentLayout
);

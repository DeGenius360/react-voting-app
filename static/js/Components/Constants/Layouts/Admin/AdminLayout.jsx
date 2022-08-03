import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import Footer from "../../../Navigation/Footer/Footer";

import NavItems from "../../../Navigation/Sidebar/NavItem";
import SideBar from "../../../Navigation/Sidebar/Sidebar";
import Topbar from "../../../Navigation/TopBar/Topbar";

class AdminLayout extends Component {
  render() {
    return (
      <>
        {/* Top Navbar */}
        <Topbar />

        <MDBRow style={{ width: "100%" }}>
          <MDBCol md="2" className="mx-auto text-center">
            {/* Side Bar */}
            <SideBar static={true}>
              <NavItems
                name="NOMINEES"
                link="/dashboard/admin/nominee"
                icon="user"
              />
              <NavItems
                name="CATEGORIES"
                link="/dashboard/admin/category"
                icon="user"
              />
              <NavItems
                name="VOTES"
                link="/dashboard/admin/votes"
                icon="user"
              />
              <NavItems name="SETTINGS" link="/dashboard/admin" icon="tools" />
              <NavItems />
              <NavItems />
              <NavItems />
              <NavItems />
              <NavItems />
              <NavItems />
              <NavItems /> <NavItems />
            </SideBar>
          </MDBCol>
          <MDBCol md="10">
            {" "}
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

export default AdminLayout;

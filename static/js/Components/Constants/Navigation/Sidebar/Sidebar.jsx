import React, { Component } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: this.props.static ? true : false,
    };
  }

  Toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  render() {
    return (
      <ProSidebar
        // collapsedWidth="10px"
        // width="60%"
        style={{
          height: !this.state.collapse ? "50px" : "652px",
          overflowY: this.props.static ? "" : "scroll",
          textAlign: "justify",
        }}
      >
        {this.props.static ? (
          ""
        ) : (
          <button
            className="flex-column btn btn-group font-weight-bold text-white "
            onClick={this.Toggle}
          >
            ☰ {this.state.collapse ? "Close Category" : "Open Category"}
          </button>
        )}

        <SidebarContent>{this.props.children}</SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem className="mx-auto text-center">UMeX Awards</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    );
  }
}
export default Sidebar;

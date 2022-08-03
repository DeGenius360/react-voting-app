import React from "react";
import { MenuItem, Menu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";

const NavItems = ({ link, name, icon }) => {
  return (
    <Menu iconShape="square">
      <MenuItem
        iconShape={icon}
        className="text-uppercase"
        style={{ fontSize: "10px" }}
      >
        {name}
        <a href={link}>.</a>
        {/* <Link to={link} /> */}
      </MenuItem>
    </Menu>
  );
};

export default NavItems;

import React, { Component } from "react";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="row">
            <p className="text-center mx-auto">
              UMeX Awards - Powered by{" "}
              <a href="#!" className="blue-text">
                Tsolutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

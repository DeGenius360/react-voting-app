import React, { Component } from "react";
import "./error.css";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
class Error404 extends Component {
  render() {
    return (
      <div className="error" style={{ width: "100%" }}>
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Error | 404</title>
          <link rel="canonical" href="https://pensaumat.netlify.app/error" />
          <meta
            name="description"
            content="PENSA UMaT |Error 404| Pentecost Students and Associates | PENSA GHANA | WESTERN REGION | 
                PENSA Tarkwa Sector| The Church of Pentecost Tarkwa Area | COP Tarkwa Area | University of Mines and Technology | UMaT Tarkwa 
                Religious Group Ghana| West Africa | Africa| Evangelism Department | Music and Drama Department | Prayer Department | Financial Departmnet|
                Editorial Department | Ladies Wing Departmnet | Gents Wing Department | Pensice Committee | Welfare Committee | Pre-Audit Committee | 
                Secretariat Committee 
                "
          />
        </Helmet> */}
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit">4</span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit secondDigit">0</span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit">4</span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
            <h3>
              <Link to="/">Go to Home</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;

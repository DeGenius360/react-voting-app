import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AdminLayout from "../../../Constants/Layouts/Dashboard/Admin/AdminLayout";
import Nominee from "../Common/Nominee";
import Category from "../Common/Category";
// import Vote from "../Common/Votes";

class AdminRoutes extends Component {
  render() {
    return (
      <AdminLayout>
        <Switch>
          <Route exact path="/dashboard/admin" component={Nominee} />
          <Route path="/dashboard/admin/nominee" component={Nominee} />
          {/* <Route path="/dashboard/admin/votes" component={Vote} /> */}

          <Route path="/dashboard/admin/category" component={Category} />
        </Switch>
      </AdminLayout>
    );
  }
}

export default AdminRoutes;

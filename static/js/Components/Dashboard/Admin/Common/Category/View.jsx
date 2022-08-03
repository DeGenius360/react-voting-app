import React, { Component } from "react";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./style.css";
import ModalPage from "./ModalEditAdd";
import { connect } from "react-redux";
import {
  deleteCategory,
  getCategorys,
} from "../../../../../Store/Actions/common/categoryAction";
import Pagination from "../../../../Constants/Pagination/Pagination";
import Search from "../../../../Constants/Search/Search";
import ViewLoading from "../../../../Constants/Loading/BtnLoading/viewLoading";
import BtnLoading from "../../../../Constants/Loading/BtnLoading/BtnLoading";
import { BBtn } from "../../../../Constants/Common/common";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "",
      _id: "",
      name: "",

      currentPage: 1,
      postsPerPage: 5,
      search: "",
      loading: false,
      categorys: [],
      ntf: null,
      msg: null,
      delete: false,
    };
  }

  API = () => {
    if (this.props.user) {
      this.props.getCategorys();
    }
  };
  componentDidMount() {
    this.API();
  }
  OnEdit = (e) => {
    this.setState({
      check: e._id,
      _id: e._id,
      name: e.name,
    });
  };

  catchNotification(prevProps) {
    const { error, success } = this.props;

    //Login Success;
    if (success !== prevProps.success) {
      if (success.id === "DELETE_CATEGORY_SUCCESS") {
        this.setState({
          ntf: success.ntf,
        });
      }
    }

    // Check for login Errors;
    if (error !== prevProps.error) {
      if (error.id === "DELETE_CATEGORY_FAIL") {
        this.setState({
          msg: error.msg,
        });
      }
    }
  }
  componentDidUpdate(prevProps) {
    this.catchNotification(prevProps);
  }
  onDelete = (_id) => {
    if (window.confirm("Are you sure you wish to delete this Category ?")) {
      this.setState({ delete: true, _id });
      setTimeout(() => {
        this.props.deleteCategory(_id);
        this.setState({ delete: false });
        return window.location.reload();
      }, 4000);
    }
  };
  hanldeChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    setTimeout(() => {
      this.SearchCategory();
    }, 10);
  };
  SearchCategory = () => {
    const { categorys } = this.props;
    const result =
      categorys &&
      categorys.filter((x) =>
        x.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    this.setState({
      loading: false,
      categorys: result,
    });
  };
  render() {
    const { categorys } = this.props;
    let i = 0;
    const testing = true;
    const toggleOff = () => {
      this.setState({ check: "" });
    };

    const Notification = (
      <>
        {this.state.msg || this.state.ntf ? (
          <span
            className={`alert ${
              this.state.msg
                ? "alert-danger alert-error"
                : "alert-success alert-success"
            } mx-auto text-center`}
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
      </>
    );
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    const currentPosts = this.state.search
      ? this.state.categorys.slice(indexOfFirstPost, indexOfLastPost)
      : categorys && categorys.slice(indexOfFirstPost, indexOfLastPost);

    const ResultTable = (
      <MDBContainer fluid>
        <Search
          value={this.state.search}
          onChange={this.hanldeChange}
          onClick={this.SearchLicense}
          name="search"
          label="Search by Name"
        />
        <br />
        {Notification}
        <br />
        {/*eslint-disable-next-line*/}
        <MDBTable striped bordered hover responsive>
          <caption>LIST OF PROMOTION OF KNOWLEDGE CATEGORY</caption>
          <MDBTableHead color="default-color" textWhite>
            <tr>
              <th>
                <b>#</b>
              </th>
              <th>Category</th>

              <th className="colspan-2">Action</th>
            </tr>
          </MDBTableHead>

          {currentPosts &&
            currentPosts.map((e) => (
              <MDBTableBody key={e._id}>
                <tr>
                  <td>{++i}</td>
                  <td>{e.name}</td>

                  <td>
                    <BBtn
                      onClick={() => {
                        this.OnEdit(e);
                      }}
                      size="sm"
                      icon="fa-pen"
                      iconcolor="blue"
                      label="Edit"
                    />
                    {this.state.delete && e._id === this.state._id ? (
                      <BtnLoading />
                    ) : (
                      <BBtn
                        onClick={() => this.onDelete(e._id)}
                        size="sm"
                        icon="fa-pen"
                        iconcolor="red"
                        label="Delete"
                      />
                    )}
                    /
                  </td>
                </tr>
              </MDBTableBody>
            ))}
        </MDBTable>
      </MDBContainer>
    );
    return (
      <div style={{ width: "100%" }}>
        {!testing ? (
          <div
            className=""
            style={{
              paddingBottom: "100px",
              paddingTop: "100px",
              paddingLeft: "450px",
            }}
          >
            <ViewLoading />
          </div>
        ) : this.state.check !== "" ? (
          <div>
            {ResultTable}
            <ModalPage
              status={true}
              toggleOff={toggleOff}
              data={this.state}
              state="categorys"
            />
            <Pagination
              postsPerPage={this.state.postsPerPage}
              totalPosts={categorys ? categorys.length : 0}
              paginate={paginate}
            />
          </div>
        ) : (
          <>
            {ResultTable}
            <Pagination
              postsPerPage={this.state.postsPerPage}
              totalPosts={categorys ? categorys.length : 0}
              paginate={paginate}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.category.items,
    user: state.auth.user,
    loading: state.category.loading,
    error: state.error,
    success: state.success,
  };
};

export default connect(mapStateToProps, { getCategorys, deleteCategory })(
  Category
);

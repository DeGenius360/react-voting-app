import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategorys } from "../../../../Store/Actions/common/categoryAction";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  API = () => {
    this.props.getCategorys();
  };
  componentDidMount() {
    this.API();
  }
  render() {
    const {
      value,
      errorstatus,
      errors,
      error,
      onChange,
      style,
      className,
      required,
      name,
      category,
      disabled,
    } = this.props;
    return (
      <div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          error={error}
          errors={errors}
          required={required}
          className={`form-control ${className}`}
          style={style}
          disabled={disabled}
        >
          <option>Select Category</option>
          {category &&
            category.map((e) => <option key={e._id}>{e.name}</option>)}
        </select>
        {!{ errorstatus } ? (
          <span></span>
        ) : (
          <span style={{ color: "red" }}>{errors}</span>
        )}
        {required ? (
          <b>
            <sup style={{ color: "red" }}>*</sup>
          </b>
        ) : (
          ""
        )}
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category: state.category.items,
  };
};
export default connect(mapStateToProps, { getCategorys })(Category);

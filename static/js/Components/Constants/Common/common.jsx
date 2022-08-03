import React from "react";
import { MDBInput } from "mdbreact";
import PropTypes from "prop-types";
import BtnLoading from "../Loading/BtnLoading/BtnLoading";
export const BBtn = ({
  id,
  className,
  name,
  style,
  onClick,
  disabled,
  label,
  icon,
  type,
  color,
  load,
  ntf,
  msg,
  loading,
  iconcolor,
}) => {
  return (
    <button
      className={`btn ${className}`}
      id={id}
      name={name}
      style={{ backgroundColor: color ? color : "#2BBBAD", ...style }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {load ? (
        msg === null && ntf === null && loading ? (
          <BtnLoading />
        ) : (
          <label>
            {label}
            {icon ? (
              <i className={`fas ${icon} `} style={{ color: iconcolor }}></i>
            ) : (
              ""
            )}
          </label>
        )
      ) : (
        <label>
          {label}
          {icon ? (
            <i className={`fas ${icon} `} style={{ color: iconcolor }}></i>
          ) : (
            ""
          )}
        </label>
      )}
    </button>
  );
};

export const TextFieldGroup = ({
  name,
  value,
  label,
  errorstatus,
  errors,
  type,
  onChange,
  style,
  className,
  required,
  disabled,
}) => {
  return (
    <div>
      <MDBInput
        label={
          <p>
            {label}{" "}
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
          </p>
        }
        name={name}
        value={value}
        onChange={onChange}
        group
        type={type}
        className={`form-control ${className}`}
        style={style}
        disabled={disabled}
      />
    </div>
  );
};
export const SelectDate = ({
  name,
  value,
  label,
  errorstatus,
  errors,
  type,
  onChange,
  style,
  className,
  required,
  disabled,
}) => {
  return (
    <div>
      <p>
        {" "}
        {
          <p>
            {label}{" "}
            {!{ errorstatus } ? (
              <span></span>
            ) : (
              <span style={{ color: "red" }}>{errors}</span>
            )}
            {!required ? (
              <b>
                <sup style={{ color: "red" }}>*</sup>
              </b>
            ) : (
              ""
            )}
          </p>
        }
      </p>
      <MDBInput
        name={name}
        value={value}
        onChange={onChange}
        group
        type={type}
        className={`form-control ${className}`}
        style={style}
        disabled={disabled}
      />
    </div>
  );
};

export const LegendFieldRadio = ({
  name,
  type,
  value,
  onChange,
  errors,
  errorstatus,
  label,
  checked,
  icon,
}) => {
  return (
    <fieldset className="form-group ">
      <MDBInput
        containerClass="none"
        filled={false}
        icon={icon}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        checked={checked}
        label={label}
      />
      {!{ errorstatus } ? (
        <span></span>
      ) : (
        <span style={{ color: "red" }}>{errors}</span>
      )}
    </fieldset>
  );
};
export const CheckBox = ({
  name,
  required,
  value,
  onChange,
  errors,
  errorstatus,
  label,
  link,
  className,
  disabled,
}) => {
  return (
    <div className={className}>
      <label className={`ml-5 `}>
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />

        {disabled ? "" : label}
      </label>
      {disabled ? (
        ""
      ) : !{ errorstatus } ? (
        <span></span>
      ) : (
        <span style={{ color: "red" }}>{errors}</span>
      )}
    </div>
  );
};
export const FileInput = ({ name, onChange, label, disabled }) => {
  return (
    <>
      <label htmlFor="">{label}</label> <br />
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            name={name}
            onChange={onChange}
            disabled={disabled}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
      <br /> <br />
    </>
  );
};

export const SelectField = ({
  name,
  value,
  onChange,
  errors,
  errorstatus,
  children,
  className,
}) => {
  return (
    <div>
      <select
        className={`browser-default custom-select ${className}`}
        value={value}
        onChange={onChange}
        name={name}
      >
        {children}
      </select>
      {!{ errorstatus } ? (
        <span></span>
      ) : (
        <span style={{ color: "red" }}>{errors}</span>
      )}
    </div>
  );
};

export const ErrorHandling = ({ errors, errorstatus }) => {
  return !{ errorstatus } ? (
    <span></span>
  ) : (
    <span style={{ color: "red" }}>{errors}</span>
  );
};

ErrorHandling.propTypes = {
  errorstatus: PropTypes.bool,
  errors: PropTypes.string,
};

// TextFieldGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   errorstatus: PropTypes.bool,
//   errors: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// FileInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   errorstatus: PropTypes.bool,
//   errors: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// TextFieldGroup.defaultProps = {
//   type: "text",
// };

// LegendFieldRadio.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   errorstatus: PropTypes.bool,
//   errors: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// LegendFieldRadio.defaultProps = {
//   type: "text",
// };

// SelectField.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   errorstatus: PropTypes.bool,
//   errors: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

// SelectField.defaultProps = {
//   type: "text",
// };

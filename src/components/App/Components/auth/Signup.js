import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import logo from "./../../../../assets/logo/fashionist.png";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../../../../actions/authAction";

const Register = (props) => {
  const [error, setError] = useState({});

  useEffect(() => {
    if (props.errors) {
      setError(props.errors);
    }
  }, [error, props.errors]);
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const formObject = {
    name: { selector: "name", placeholder: "Jon Doe", type: "text", default: "Jon Doe", validator: register({ required: "You must specify a name" }) },
    email: {
      selector: "email", placeholder: "jondoe@example.com", type: "email", default: "Jon Doe",
      validator: register({
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      })
    },
    password: {
      selector: "password", placeholder: "password", type: "password", default: "Jon Doe",
      validator: register({ required: "You must specify a password" })
    },
    verifyPassword: {
      selector: "verifypassword", placeholder: "password", type: "password", default: "Jon Doe",
      validator: register({
        required: "Verify password is required",
        validate: (value) =>
          value === password.current || "Passwords do not match",
      })
    }
  }
  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      verifyPassword: data.verifypassword
    };
    console.log(newUser);
    // props.registerUser(newUser, props.history);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lt-bg-primary w-full">
        <div className="flex items-center justify-center h-16 w-full">
          <img src={logo} alt="logo" />
        </div>
        <form
          className="flex flex-col px-4 pt-8 pb-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder={formObject.name.placeholder}
            name={formObject.name.selector}
            type={formObject.name.type}
            ref={formObject.name.validator}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder={formObject.email.placeholder}
            name={formObject.email.selector}
            type={formObject.email.type}
            ref={formObject.email.validator}
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder={formObject.password.placeholder}
            name={formObject.password.selector}
            type={formObject.password.type}
            ref={formObject.password.validator}
          />
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder={formObject.verifyPassword.placeholder}
            name={formObject.verifyPassword.selector}
            type={formObject.verifyPassword.type}
            ref={formObject.verifyPassword.validator}
          />
          {errors.verifypassword && <p className="text-red-600">{errors.verifypassword.message}</p>}
          <div className="flex items-center py-2">
            <button
              className="w-full px-4 py-2 lt-bg-accent text-white rounded-md font-semibold"
              type="submit"
            >
              <FormattedMessage id="signup" />
            </button>
          </div>
          {error && <p>{error.email}</p>}
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

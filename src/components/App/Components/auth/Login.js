import React, { useEffect, useState } from "react";
import {Link, Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "./../../../../assets/logo/fashionist.png";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./../../../../actions/authAction";
const Login = (props) => {
  const [error, setError] = useState({});

  useEffect(
    () => {
      if (props.auth.isAuthenticated) {
        return <Redirect to="/" />
      }
      if (props.errors) {
        setError(props.errors);
      }
    },
    [error, props.auth.isAuthenticated, props.errors]
  );
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    props.loginUser(userData);
  };
  if(props.auth.isAuthenticated){
    return <Redirect to="/" />
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lt-bg-primary rounded-md w-full">
        <div className="flex items-center justify-center h-16 w-full">
          <img src={logo} alt="logo" />
        </div>
        <form
          className="flex flex-col px-4 pt-8 pb-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder="jondoe@example.abc"
            name="email"
            type="email"
            ref={register({ required: true })}
          />{" "}
          {/* register an input */}
          {errors.email && "Email is required"}
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder="******"
          />
          {errors.password && "Password is required"}
          <div className="flex items-center py-2">
            <button
              className="w-full px-4 py-2 lt-bg-accent text-white rounded-md font-semibold"
              type="submit"
            >
              <FormattedMessage id="login" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);

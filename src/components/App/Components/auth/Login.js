import React from "react";
import { useForm } from "react-hook-form";
import logo from "./../../../../assets/logo/fashionist.png";
import { FormattedMessage } from "react-intl";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="w-screen h-screen flex justify-center items-center px-2">
      <div className="lt-bg-primary rounded-md shadow-md w-full md:w-2/3 lg:w-1/3 xl:w-1/4">
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
              <FormattedMessage id="login"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

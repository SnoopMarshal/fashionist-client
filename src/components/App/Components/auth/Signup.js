import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import logo from "./../../../../assets/logo/fashionist.png";
import { FormattedMessage } from "react-intl";

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
      console.log(data);
  };
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
            placeholder="Jon Doe"
            name="name"
            type="text"
            ref={register({ required: "You must specify a name" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder="jondoe@example.abc"
            name="email"
            type="email"
            ref={register({ required: "Email is required", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              } })}
          />{" "}
          {errors.email && <p>{errors.email.message}</p>}
          <input
            name="password"
            type="password"
            ref={register({ required: "You must specify a password" })}
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder="******"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            name="verifypassword"
            type="password"
            ref={register({
              required: "Verify password is required",
              validate: (value) =>
                value === password.current || "Passwords do not match",
            })}
            className="pl-2 py-2 rounded-md focus:outline-none mb-4"
            placeholder="******"
          />
          {errors.verifypassword && <p>{errors.verifypassword.message}</p>}
          <div className="flex items-center py-2">
            <button
              className="w-full px-4 py-2 lt-bg-accent text-white rounded-md font-semibold"
              type="submit"
            >
              <FormattedMessage id="signup" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Logo, Input, Button } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { data, Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const Signup = async (data) => {
    try {
      setError("");
      if (data) {
        const userData = await authService.createAccount(data);
        if (userData) {
          const userData = await authService.authenticationState();
          if (userData) {
            dispatch(authLogin(userData));
            navigate("/");
          }
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-25">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(Signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name: "
              placeholder="Enter your Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="email"
              type="email"
              placeholder="Enter Your Email Address"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

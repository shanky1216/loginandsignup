import React from "react";
import Input from "../Ui/Input";
import { Link, Form } from "react-router-dom";

const LoginForm = () => {
  return (
    <Form
      method="POST"
      className="max-w-md mx-auto p-6 rounded-xl shadow-md space-y-4 bg-white"
    >
      <h2 className="text-2xl font-bold text-center">Login to your account</h2>
      <p className="text-center text-sm text-gray-600">Welcome back!</p>

      <Input name="email" type="email" placeholder="Email address" />
      <Input name="password" type="password" placeholder="Password" />

      <div className="flex justify-center">
        <Link
          to="/forgot-password"
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <button
        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
      >
        Log In
      </button>

      <div className="flex justify-center mt-4">
        <Link to="/signup" className="text-sm text-blue-500 hover:underline">
          Don't have an account? Sign up
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;

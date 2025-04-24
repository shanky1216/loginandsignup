import React from "react";
import Input from "../Ui/Input";
import { Link,Form } from "react-router-dom";

const SignupForm = () => {
  return (
    <Form
      method="POST"
      className="max-w-md mx-auto p-6 rounded-xl shadow-md space-y-4 bg-white"
    >
      <h2 className="text-2xl font-bold text-center">Create a new account</h2>
      <p className="text-center text-sm text-gray-600">It’s quick and easy.</p>

      <div className="flex gap-2">
        <Input line name="firstName" type="text" placeholder="First name" />
        <Input line name="lastName" type="text" placeholder="Last name" />
      </div>

      <Input name="email" type="email" placeholder="Email address" />
      <Input name="password" type="password" placeholder="New password" />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />

      <div>
        <label className="text-sm text-gray-700">Date of birth</label>
        <div className="flex gap-2 mt-1">
          <select
            name="birthDay"
            className="flex-1 border border-gray-400 rounded-sm p-2"
          >
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name="birthMonth"
            className="flex-1 border border-gray-400 rounded-sm p-2"
          >
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
          <select
            name="birthYear"
            className="flex-1 border border-gray-400 rounded-sm p-2"
          >
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={2025 - i}>
                {2025 - i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-700">Gender</label>
        <div className="flex gap-3 mt-1">
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="custom" />
            Custom
          </label>
        </div>
      </div>

      <button 
        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
      >
        Sign Up
      </button>
      <div className="flex justify-center">
        <Link className="text-blue-500 hover:underline" to="/">
          Already have an account?
        </Link>
      </div>
    </Form>
  );
};

export default SignupForm;

import React from "react";
import SignupForm from "../components/SignupForm";
import { redirect } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Signup;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Service not available");
  }
  const resData = await response.json();
  return redirect('/')
}

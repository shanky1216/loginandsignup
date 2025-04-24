import React from 'react'
import LoginForm from '../components/LoginForm'
import { redirect } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <LoginForm/>
    </>
  )
}

export default Login;


export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const response = await fetch("http://localhost:8080/auth/login", {
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
  return redirect("/dashboard");
}

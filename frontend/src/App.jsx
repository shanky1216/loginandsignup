import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login, { action as loginAction } from "./pages/Login";
import Signup, { action as signupAction } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Login />, action: loginAction },
      { path: "signup", element: <Signup />, action: signupAction },
      {path:"dashboard", element:<Dashboard/>}
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

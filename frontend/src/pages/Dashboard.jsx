import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold text-green-700">Welcome to the Dashboard 👋</h1>
      <p className="mt-4 text-gray-700 text-lg">
        You’re successfully logged in. This is your dashboard.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>View your profile</li>
          <li>Update account settings</li>
          <li>Log out</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

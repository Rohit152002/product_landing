import React from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen bg-[url('https://img.freepik.com/free-photo/view-arrangement-with-keyboard-notebooks_23-2148847749.jpg')] object-contain bg-no-repeat bg-cover">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              for="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              for="password_confirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <NavLink
              to="/"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </NavLink>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <NavLink to={"/login"} className="text-blue-600 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;

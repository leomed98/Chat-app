import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="w-full max-w-xl min-w-[400px] p-8 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-white text-center">Welcome back!</h1>
        <p className="text-gray-400 text-center mt-2">We're so excited to see you again!</p>
        
        <div className="mt-8">
          <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your username" />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your password" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="text-indigo-500 focus:ring-0 rounded"/>
            <label htmlFor="remember" className="ml-2 text-gray-400 text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-6 rounded-md transition duration-200">Login</button>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Need an account? <a href="#" className="text-indigo-500 hover:underline">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

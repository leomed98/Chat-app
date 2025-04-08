import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="w-full max-w-xl min-w-[400px] p-8 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-white text-center">Create Your Account</h1>
        <p className="text-gray-400 text-center mt-2">Join us and start connecting with others!</p>
        
        <div className="mt-8">
          <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your username" />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your password" />
        </div>

        <div className="mt-4">
          <label htmlFor="confirm-password" className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
          <input type="password" id="confirm-password" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Confirm your password" />
        </div>
        
        <div className="mt-4">
          <label htmlFor="dob" className="block text-gray-300 text-sm font-medium mb-2">Date of Birth</label>
          <input type="date" id="dob" className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-6 rounded-md transition duration-200">Sign Up</button>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login here</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

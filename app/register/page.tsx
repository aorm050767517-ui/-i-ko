// app/register/page.tsx
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="username">Username</label>
                        <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
                        Register
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
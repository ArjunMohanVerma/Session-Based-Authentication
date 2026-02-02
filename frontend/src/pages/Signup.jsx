import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          SignUp to your account
        </h2>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Optional footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

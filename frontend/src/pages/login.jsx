import { Link, useNavigate} from "react-router-dom";
import { LoginAPI } from "./api";
import { useState,useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/authContext";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //handle Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("Sending data:", { email, password });
    try {
      const res = await LoginAPI({ email, password });
      setUser(res.data.user);
      toast.success("Login Successfull");
      // console.log(res.data);
        navigate("/home");
    } catch (err) {
      toast.error(`${err.response?.data.message}`|| "All fields are required");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Username */}
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
              value={email}
              id="email"
              placeholder="Enter Email"
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              placeholder="Enter password"
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Optional footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

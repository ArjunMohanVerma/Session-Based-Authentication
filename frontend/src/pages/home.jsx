import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";
import { LogoutAPI } from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async()=>{
    try{

      await LogoutAPI();
      setUser(null);
      toast.success("Logout Successfull");
      navigate("/");
    }catch{
      toast.error("Logout Failed!");
    }


  }

  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md text-center">
      <h1 className="text-3xl font-bold text-white mb-6">
        Welcome <span className="text-indigo-400">{user.username}</span>
      </h1>

      <button
        onClick={handleLogout}
        className="
          w-full py-2 px-4 rounded-md
          bg-red-600 hover:bg-red-700
          text-white font-semibold
          transition-colors duration-200
          focus:outline-none focus:ring-2
          focus:ring-red-500 focus:ring-offset-2
          focus:ring-offset-gray-800
        "
      >
        Logout
      </button>
    </div>
  </div>
</>

  )
};
export default Home;
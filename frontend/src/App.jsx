// import {useRef} from "react";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import { AuthProvider } from "../src/context/authContext.jsx";
import PublicRoute from "./components/PublicRoutes.jsx";


const App = () => {

//   const smoothScrollTo = (targetRef, duration = 800) => {
//   const target = targetRef.current;
//   if (!target) return;

//   const start = window.scrollY;
//   const end = target.getBoundingClientRect().top + window.scrollY;
//   const distance = end - start;
//   let startTime = null;

//   const animation = (currentTime) => {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;

//     const progress = Math.min(timeElapsed / duration, 1);

//     // easeInOut
//     const ease =
//       progress < 0.5
//         ? 2 * progress * progress
//         : 1 - Math.pow(-2 * progress + 2, 2) / 2;

//     window.scrollTo(0, start + distance * ease);

//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   };

//   requestAnimationFrame(animation);
// };


  // const loginRef = useRef(null);
  // const signupRef = useRef(null);

  // const scrollToSignup = () => {
  //   signupRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollToLogin = () => {
  //   loginRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-4 text-white">
          <button
            onClick={() => smoothScrollTo(signupRef, 1000)}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Signup
          </button>

          <button
            onClick={() => smoothScrollTo(loginRef, 1000)}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Login
          </button>
        </div>
      </div>
       */}
      {/* <section ref={signupRef} className="h-screen bg-blue-500"> */}

         <AuthProvider>

      <Routes>
        <Route path="/" element={
          <PublicRoute><Login/></PublicRoute>} />
      {/* </section> */}

      {/* <section ref={loginRef} className="h-screen bg-blue-500"> */}
       <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
      {/* </section> */}
      <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
 
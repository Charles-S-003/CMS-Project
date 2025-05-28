import { Route, Routes } from "react-router-dom";
import About from "../Pages/About.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import { Signin } from "../pages/SignIn";
import Signup from "../pages/SignUp";
import { Developers } from "../Pages/Developers";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/developers" element={<Developers/>} />
      <Route path="*" element={<NotFound/>} /> {/* Catch-all route for 404 */}
    </Routes>
  );
}
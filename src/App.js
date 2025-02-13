import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./admin-dashboard/AdminDashboard";
import UserDashboard from "./user-dashboard/UserDashboard";
// import TrainerDashboard from "./trainers-dashboard/TrainerDashboard";
import NotFound from "./components/NotFound";
import TrainerDashboard from "./trainer-dashboard/TrainerDashboard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import AdminLogin from "./admin-dashboard/AdminLogin";
import ManageCourses from "./admin-dashboard/ManageCourses";
import SignupForm from "./forms/SignupForm";
import ForgotPasswordForm from "./forms/ForgotPasswordForm";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./user-dashboard/RegisterForm";
import MailsList from "./components/MailList";



const App = () => {
  return (
    <Router>
    {/* <Header /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-dashboard/manage-courses/add" element={<ManageCourses.js />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/mailList" element={<MailsList />} />

      <Route path="/navbar" element={<Navbar />} />
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;

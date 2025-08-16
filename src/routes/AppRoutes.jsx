import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import DepartmentsIndex from "../pages/Departments";
import DepartmentDetail from "../pages/DepartmentDetail";
import WorkingVisaExtension from "../pages/ServiceDetail";
import AppointmentDetail from "../pages/AppointmentDetail";
import PaymentsPage from "../pages/Payment";
import ProfilePage from "../pages/Profile";
import ContactPage from "../pages/Contact";

const NotFound = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 text-center">
    <div className="text-6xl">😕</div>
    <div className="text-2xl font-bold mt-2">Page not found</div>
    <a href="/" className="mt-3 inline-block underline">
      Back to home
    </a>
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/departments" element={<DepartmentsIndex />} />
      <Route path="/departments/:id" element={<DepartmentDetail />} />
      <Route path="/appointments/:id" element={<AppointmentDetail />} />
      <Route
        path="/service/working-visa-extension"
        element={<WorkingVisaExtension />}
      />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

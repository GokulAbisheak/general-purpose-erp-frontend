import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import BusinessManagement from "../pages/BusinessManagement";
import CustomerManagement from "../pages/CustomerManagment";
import EmployeeManagement from "../pages/EmployeeManagement";
import FinanceManagment from "../pages/FinanceManagement";
import InventoryManagement from "../pages/InventoryManagement";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

const FrontendRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/business" element={<BusinessManagement />} />
            <Route path="/customer" element={<CustomerManagement />} />
            <Route path="/employee" element={<EmployeeManagement />} />
            <Route path="/finance" element={<FinanceManagment />} />
            <Route path="/inventory" element={<InventoryManagement />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default FrontendRoutes;

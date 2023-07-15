import React from "react";
import SideNav from "../../components/SideNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <SideNav />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;

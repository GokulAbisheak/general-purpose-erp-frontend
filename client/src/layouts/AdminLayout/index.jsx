import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";

const AdminLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        <SideNav state={isMobileOpen} />
        <div className="flex flex-col w-full">
          <AdminHeader isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
          <div className="p-[20px] overflow-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

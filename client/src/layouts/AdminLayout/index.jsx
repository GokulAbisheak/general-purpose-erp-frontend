import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const business = localStorage.getItem("loggedBusiness");

  useEffect(() => {
    if (business == null) {
      navigate("/login");
    }
  });

  return (
    <>
      <div className="flex h-screen">
        <SideNav state={isMobileOpen} />
        <div className="flex flex-col w-full">
          <AdminHeader
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
          <div className="p-[20px] overflow-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

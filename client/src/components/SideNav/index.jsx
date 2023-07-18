import {
  faBriefcase,
  faCoins,
  faGear,
  faHouse,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideNav = (isMobileOpen) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const sideNavLinks = [
    {
      icon: faHouse,
      text: "Dashboard",
      link: "/dashboard",
    },

    {
      icon: faBriefcase,
      text: "Employees",
      link: "/employee",
    },

    {
      icon: faCoins,
      text: "Finance",
      link: "/finance",
    },

    {
      icon: faUsers,
      text: "Customers",
      link: "/customer",
    },

    {
      icon: faWarehouse,
      text: "Inventory",
      link: "/inventory",
    },

    {
      icon: faGear,
      text: "Settings",
      link: "/settings",
    },
  ];

  return (
    <>
      <div className={`min-w-[200px] h-screen overflow-scroll bg-[rgba(126,34,206,0.7)] md:bg-gradient-to-t from-purple-700 to-purple-900 absolute md:sticky top-0 left-0 ${isMobileOpen.state ? 'block' : 'hidden'} md:block`}>
        <div className="h-[64px] w-full flex justify-center text-center items-center text-white font-bold">
          <Link className="text-2xl hidden md:block" to="/dashboard">
            General ERP
          </Link>
        </div>
        {sideNavLinks && sideNavLinks.length > 0 ? (
          sideNavLinks.map((item) => (
            <button
              key={item.link}
              className={`w-full py-[15px] px-[20px] text-white text-left flex items-center hover:bg-[rgba(0,0,0,0.3)] duration-100 ${
                item.text === "Settings" ? "absolute bottom-0" : ""
              } ${location == item.link ? ' bg-[rgba(0,0,0,0.3)]' : ''}`}
              onClick={() => {
                navigate(item.link);
              }}
            >
              <FontAwesomeIcon
                className="h-[20px] w-[20px] mr-[20px]"
                icon={item.icon}
              />
              {item.text}
            </button>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SideNav;

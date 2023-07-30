import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navigation from "../../data/NavigationData.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );

  const authNavigation = [
    {
      text: "Login",
      link: "/login",
    },

    {
      text: "Sign up",
      link: "/signup",
    },

    {
      text: "Dashboard",
      link: "/dashboard",
    },
  ];

  return (
    <>
      <div className="w-full h-[64px] bg-purple-700 px-[20px] flex justify-between text-white items-center fixed top-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10">
        <div>
          <Link className="text-2xl font-bold" to="/">
            General ERP
          </Link>
        </div>
        <div className="grid grid-flow-col gap-[20px] hidden md:grid">
          {navigation && navigation.data.length > 0 ? (
            navigation.data.map((item) => (
              <Link
                className={`text-md font-medium hover:text-purple-950 ${
                  location == item.link ? "text-purple-950" : ""
                }`}
                key={item.link}
                to={item.link}
              >
                {" "}
                {item.text}{" "}
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="grid grid-flow-col gap-[20px] hidden md:grid">
          {authNavigation && authNavigation.length > 0 ? (
            authNavigation.map((item) => (
              <Link
                className={`${
                  business == null && item.text == "Dashboard" ? "hidden" : ""
                } ${
                  business != null &&
                  (item.text == "Login" || item.text == "Sign up")
                    ? "hidden"
                    : ""
                } text-md font-medium hover:text-purple-950 ${
                  location === item.link ? "text-purple-950" : ""
                }`}
                key={item.link}
                to={item.link}
              >
                {" "}
                {item.text}{" "}
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon
              className="text-2xl hover:text-purple-900 cursor-pointer"
              icon={faBars}
            />
          </button>
        </div>
      </div>
      <div
        className={`grid bg-purple-100 text-black text-center fixed top-[64px] w-full bg-opacity-70 ${
          isOpen ? "grid" : "hidden"
        } md:hidden`}
      >
        {navigation && navigation.length > 0 ? (
          navigation.map((item) => (
            <Link
              className={`text-md font-medium hover:text-white hover:bg-purple-900 py-[10px] duration-200 ${
                location == item.link ? "text-purple-950" : ""
              }`}
              key={item.link}
              to={item.link}
            >
              {" "}
              {item.text}{" "}
            </Link>
          ))
        ) : (
          <></>
        )}

        {authNavigation && authNavigation.length > 0 ? (
          authNavigation.map((item) => (
            <Link
              className={`${
                business == null && item.text == "Dashboard" ? "hidden" : ""
              } ${
                business != null &&
                (item.text == "Login" || item.text == "Sign up")
                  ? "hidden"
                  : ""
              } text-md font-medium hover:text-white hover:bg-purple-900 py-[10px] duration-200 ${
                location === item.link ? "text-purple-950 " : " "
              }`}
              key={item.link}
              to={item.link}
            >
              {" "}
              {item.text}{" "}
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;

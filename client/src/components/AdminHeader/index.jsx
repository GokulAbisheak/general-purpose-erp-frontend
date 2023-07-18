import React, { useEffect, useState } from "react";
import DefaultProfile from "../../assets/default-user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faBars,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminHeader = ({ isMobileOpen, setIsMobileOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownLinks = [
    {
      icon: faUser,
      text: "Profile",
      link: "/profile",
    },

    {
      icon: faRightFromBracket,
      text: "Log out",
      link: "/logout",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-end w-full h-[64px] sticky top-0 shadow-xl px-[20px] relative bg-white">
        <div
          className={`absolute left-[20px] md:hidden flex items-center text-2xl font-bold text-purple-800`}
        >
          <button
            onClick={() => {
              setIsMobileOpen(!isMobileOpen);
            }}
          >
            <FontAwesomeIcon
              className={`w-[24px] h-[24px] cursor-pointer mr-[15px]`}
              icon={faBars}
            />
          </button>
          General ERP
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-[36px] h-[36px] rounded-full bg-[#f2f2f2] overflow-hidden relative"
        >
          <img className="w-full absolute bottom-0" src={DefaultProfile} />
        </button>
      </div>
      {isOpen ? (
        <div className="w-[120px] flex flex-col absolute right-0 top-[64px] bg-white shadow-xl border-t-2">
          {dropdownLinks && dropdownLinks.length > 0 ? (
            dropdownLinks.map((item) => (
              <button
                className="text-left p-[10px] hover:bg-[#f2f2f2] border-b-2"
                onClick={() => {
                  navigate(item.link);
                }}
              >
                <FontAwesomeIcon className="mr-[10px]" icon={item.icon} />
                {item.text}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminHeader;

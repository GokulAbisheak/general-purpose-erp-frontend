import React from "react";
import navigation from "../../data/NavigationData.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const services = [
    {
      text: "Human Resourse Management",
      link: "/services/#hrm",
    },

    {
      text: "Customer Relationship Management",
      link: "/services/#crm",
    },

    {
      text: "Finance Management",
      link: "/services/#fm",
    },

    {
      text: "Inventory Management",
      link: "/services/#im",
    },
  ];

  const socials = [
    {
      icon: faGithub,
      link: "https://github.com/GokulAbisheak",
    },

    {
      icon: faInstagram,
      link: "https://instagram.com/gokulabisheak",
    },

    {
      icon: faLinkedin,
      link: "https://linkedin.com/in/gokul-abisheak",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap bg-neutral-800 w-full py-[60px] px-[30px] text-white">
        <div className="flex w-1/2 lg:w-1/3 flex-col gap-[20px] px-[20px] py-[20px]">
          <div className="text-xl font-semibold">Quick Links</div>
          <div className="flex flex-col gap-[10px]">
            {navigation && navigation.data.length > 0 ? (
              navigation.data.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="hover:text-purple-950"
                >
                  {item.text}
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex w-1/2 lg:w-1/3 flex-col gap-[20px] px-[20px] py-[20px]">
          <div className="text-xl font-semibold">Services</div>
          <div className="flex flex-col gap-[10px]">
            {services && services.length > 0 ? (
              services.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="hover:text-purple-950"
                >
                  {item.text}
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 flex-col gap-[20px] px-[20px] py-[20px]">
          <div className="text-xl font-semibold">Keep in touch</div>
          <div className="flex flex-col gap-[10px]">
            <div>
              General ERP is designed and developed to help small business to
              manage their business processes.
            </div>
            <div className="flex gap-[15px]">
              {socials && socials.length > 0 ? (
                socials.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition ease-in-out"
                  >
                    <FontAwesomeIcon className="text-3xl" icon={item.icon} />
                  </Link>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[20px] flex text-center justify-center items-center bg-neutral-700 text-white">
        Made with Love <FontAwesomeIcon className="ml-[10px] text-red-600 text-xl" icon={faHeart} />
      </div>
    </>
  );
};

export default Footer;

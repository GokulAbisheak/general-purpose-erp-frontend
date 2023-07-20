import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = {
      business: business._id,
      name: name,
      email: email,
      phone: contact,
      address: address,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/customer/add`, customer)
      .then((res) => {
        navigate("/customer");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                Add Customer
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  ></input>
                  <button
                    type="submit"
                    className="bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900"
                  >
                    Add Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;

import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [NIC, setNIC] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      business: business._id,
      employeeId: employeeID,
      name: name,
      employeeType: type,
      nic: NIC,
      phoneNumber: contact,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/employee/add`, employee)
      .then((res) => {
        navigate("/employee");
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-neutral-800 font-bold text-2xl mb-[20px]">
                Add Employee
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Employee ID"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setEmployeeID(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Type"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="NIC"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setNIC(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Contact"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  ></input>
                  <button
                    type="submit"
                    className="bg-neutral-800 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-neutral-700"
                  >
                    Add Employee
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

export default AddEmployee;

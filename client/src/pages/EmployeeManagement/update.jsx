import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [employeeID, setEmployeeID] = useState(state.item.employeeId);
  const [name, setName] = useState(state.item.name);
  const [type, setType] = useState(state.item.employeeType);
  const [NIC, setNIC] = useState(state.item.nic);
  const [contact, setContact] = useState(state.item.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      employeeId: employeeID,
      name: name,
      employeeType: type,
      nic: NIC,
      phoneNumber: contact
    }

    axios
      .patch(
        `${import.meta.env.VITE_SERVER_URL}/employee/update/${state.item._id}`,
        employee
      )
      .then((res) => {
        navigate("/employee");
      })
      .catch((error) => {
        alert("Error Updating");
      });
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                Update Employee
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Employee ID"
                    value={employeeID}
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setEmployeeID(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Type"
                    value={type}
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="NIC"
                    value={NIC}
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setNIC(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    value={contact}
                    placeholder="Contact"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  ></input>
                  <button
                    type="submit"
                    className="bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900"
                  >
                    Update Employee
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

export default UpdateEmployee;

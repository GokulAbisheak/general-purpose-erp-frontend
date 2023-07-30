import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Employee ID", "Name", "Type", "NIC", "Contact", ""];
  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/employee/get/business/${
          business._id
        }`
      )
      .then((res) => {
        setEmployees(res.data);
      });
  });

  const deleteEmployee = (id) => {
    if (!confirm("Are you sure you want to delete?")) {
      return;
    }

    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/employee/delete/${id}`)
      .then((res) => {})
      .catch(() => {});
  };

  return (
    <>
      <div className="w-full overflow-scroll">
        <div className="table table-fixed w-full min-w-[1200px]">
          <div className="table-header-group">
            <div className="table-row bg-neutral-800 text-white font-semibold">
              {headerContent && headerContent.length > 0 ? (
                headerContent.map((item) => (
                  <div key={item} className="table-cell py-[10px] px-[20px]">
                    {item}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          {employees && employees.length > 0 ? (
            employees.map((item, index) => (
              <div
                key={index}
                className={`table-row-group ${
                  index % 2 === 0 ? "bg-neutral-300" : "bg-neutral-100"
                }`}
              >
                <div className="table-cell py-[10px] px-[20px]">
                  {item.employeeId}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.name}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.employeeType}
                </div>
                <div className="table-cell py-[10px] px-[20px]">{item.nic}</div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.phoneNumber}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  <button
                    className="p-[5px] font-semibold uppercase text-white bg-green-700 hover:bg-green-800 rounded text-sm mx-[10px]"
                    onClick={() => {
                      navigate("update", { state: { item } });
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="p-[5px] font-semibold uppercase text-white bg-red-700 hover:bg-red-800 rounded text-sm mx-[10px]"
                    onClick={() => {
                      deleteEmployee(item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <Link to="add">
        <div className="h-[50px] w-[50px] rounded-full bg-neutral-800 absolute right-[20px] bottom-[20px] shadow-lg hover:bg-neutral-700 flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            className="text-2xl text-white font-bold"
            icon={faPlus}
          />
        </div>
      </Link>
    </>
  );
};

export default EmployeeManagement;

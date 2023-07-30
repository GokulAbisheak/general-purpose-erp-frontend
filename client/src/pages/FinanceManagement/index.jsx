import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FinanceManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Transaction ID", "Amount", "Type", "Date", ""];

  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );

  const [finances, setFinances] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/finance/get/business/${
          business._id
        }`
      )
      .then((res) => {
        setFinances(res.data);
      });
  });

  const formatDate = (date) => {
    return date.substring(0, 10);
  };

  const deleteFinance = (id) => {
    if (!confirm("Are you sure you want to delete?")) {
      return;
    }

    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/finance/delete/${id}`)
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
          {finances && finances.length > 0 ? (
            finances.map((item, index) => (
              <div
                key={index}
                className={`table-row-group ${
                  index % 2 === 0 ? "bg-neutral-300" : "bg-neutral-100"
                }`}
              >
                <div className="table-cell py-[10px] px-[20px]">
                  {item.transactionId}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.amount}
                </div>
                <div
                  className={`table-cell py-[10px] px-[20px] font-semibold ${
                    item.type === "incoming" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {item.type}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {formatDate(item.date)}
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
                      deleteFinance(item._id);
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

export default FinanceManagement;

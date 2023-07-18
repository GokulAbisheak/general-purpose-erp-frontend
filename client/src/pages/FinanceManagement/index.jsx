import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FinanceManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Transaction ID", "Amount", "Type", "Date", ""];
  const sampleData = [
    {
      TransactionID: 1,
      Amount: 100,
      Type: "outgoing",
      Date: "2022-01-01",
    },
    {
      TransactionID: 2,
      Amount: 50,
      Type: "incoming",
      Date: "2022-02-02",
    },
    {
      TransactionID: 3,
      Amount: 75,
      Type: "outgoing",
      Date: "2022-03-03",
    },
    {
      TransactionID: 4,
      Amount: 200,
      Type: "incoming",
      Date: "2022-04-04",
    },
    {
      TransactionID: 5,
      Amount: 150,
      Type: "outgoing",
      Date: "2022-05-05",
    },
    {
      TransactionID: 6,
      Amount: 80,
      Type: "incoming",
      Date: "2022-06-06",
    },
    {
      TransactionID: 7,
      Amount: 120,
      Type: "outgoing",
      Date: "2022-07-07",
    },
    {
      TransactionID: 8,
      Amount: 250,
      Type: "incoming",
      Date: "2022-08-08",
    },
    {
      TransactionID: 9,
      Amount: 90,
      Type: "outgoing",
      Date: "2022-09-09",
    },
    {
      TransactionID: 10,
      Amount: 300,
      Type: "incoming",
      Date: "2022-10-10",
    },
  ];

  return (
    <>
      <div className="w-full overflow-scroll">
        <div className="table table-fixed w-full min-w-[1200px]">
          <div className="table-header-group">
            <div className="table-row bg-purple-700 text-white font-semibold">
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
          {sampleData && sampleData.length > 0 ? (
            sampleData.map((item, index) => (
              <div
                key={index}
                className={`table-row-group ${
                  index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
                }`}
              >
                <div className="table-cell py-[10px] px-[20px]">
                  {item.TransactionID}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Amount}
                </div>
                <div
                  className={`table-cell py-[10px] px-[20px] font-semibold ${
                    item.Type === "incoming" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {item.Type}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Date}
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
                  <button className="p-[5px] font-semibold uppercase text-white bg-red-700 hover:bg-red-800 rounded text-sm mx-[10px]">
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
        <div className="h-[50px] w-[50px] rounded-full bg-purple-700 absolute right-[20px] bottom-[20px] shadow-lg hover:bg-purple-900 flex justify-center items-center cursor-pointer">
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

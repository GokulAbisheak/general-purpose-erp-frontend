import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const InventoryManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Name", "Quantity", "Category", ""];
  const sampleData = [
    {
      Name: "Product A",
      Quantity: 5,
      Category: "Electronics",
    },
    {
      Name: "Product B",
      Quantity: 10,
      Category: "Clothing",
    },
    {
      Name: "Product C",
      Quantity: 2,
      Category: "Home Decor",
    },
    {
      Name: "Product D",
      Quantity: 8,
      Category: "Electronics",
    },
    {
      Name: "Product E",
      Quantity: 3,
      Category: "Clothing",
    },
    {
      Name: "Product F",
      Quantity: 12,
      Category: "Home Decor",
    },
    {
      Name: "Product G",
      Quantity: 6,
      Category: "Electronics",
    },
    {
      Name: "Product H",
      Quantity: 4,
      Category: "Clothing",
    },
    {
      Name: "Product I",
      Quantity: 9,
      Category: "Home Decor",
    },
    {
      Name: "Product J",
      Quantity: 7,
      Category: "Electronics",
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
                  {item.Name}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Quantity}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Category}
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

export default InventoryManagement;

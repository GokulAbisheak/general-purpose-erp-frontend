import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Employee ID", "Name", "Type", "NIC", "Contact", ""];
  const sampleData = [
    {
      EmployeeID: 1,
      Name: "John Doe",
      Type: "Full-time",
      NIC: "1234567890",
      Contact: "123-456-7890",
    },
    {
      EmployeeID: 2,
      Name: "Jane Smith",
      Type: "Part-time",
      NIC: "0987654321",
      Contact: "987-654-3210",
    },
    {
      EmployeeID: 3,
      Name: "Alice Johnson",
      Type: "Contractor",
      NIC: "2468135790",
      Contact: "456-789-1234",
    },

    {
      EmployeeID: 4,
      Name: "Bob Williams",
      Type: "Full-time",
      NIC: "1357924680",
      Contact: "789-123-4567",
    },
    {
      EmployeeID: 5,
      Name: "Sarah Davis",
      Type: "Part-time",
      NIC: "5678901234",
      Contact: "321-654-9870",
    },
    {
      EmployeeID: 6,
      Name: "Michael Brown",
      Type: "Full-time",
      NIC: "7890123456",
      Contact: "654-987-3210",
    },
    {
      EmployeeID: 7,
      Name: "Emily Johnson",
      Type: "Contractor",
      NIC: "9081726354",
      Contact: "987-321-6540",
    },
    {
      EmployeeID: 8,
      Name: "David Wilson",
      Type: "Part-time",
      NIC: "5432167890",
      Contact: "123-987-4560",
    },
    {
      EmployeeID: 9,
      Name: "Olivia Martin",
      Type: "Full-time",
      NIC: "7654321098",
      Contact: "321-789-6540",
    },
    {
      EmployeeID: 10,
      Name: "Daniel Thompson",
      Type: "Contractor",
      NIC: "4321098765",
      Contact: "654-321-9870",
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
                  {item.EmployeeID}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Name}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Type}
                </div>
                <div className="table-cell py-[10px] px-[20px]">{item.NIC}</div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Contact}
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

export default EmployeeManagement;

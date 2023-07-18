import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerManagement = () => {
  const navigate = useNavigate();
  const headerContent = ["Name", "Email", "Contact", "Address", ""];
  const sampleData = [
    {
      Name: "John Doe",
      Email: "johndoe@example.com",
      Contact: "123-456-7890",
      Address: "123 Main St, City, Country",
    },
    {
      Name: "Jane Smith",
      Email: "janesmith@example.com",
      Contact: "987-654-3210",
      Address: "456 Elm St, City, Country",
    },
    {
      Name: "Alice Johnson",
      Email: "alicejohnson@example.com",
      Contact: "456-789-1234",
      Address: "789 Oak St, City, Country",
    },
    {
      Name: "Bob Williams",
      Email: "bobwilliams@example.com",
      Contact: "789-123-4567",
      Address: "567 Pine St, City, Country",
    },
    {
      Name: "Sarah Davis",
      Email: "sarahdavis@example.com",
      Contact: "321-654-9870",
      Address: "890 Cedar St, City, Country",
    },
    {
      Name: "Michael Brown",
      Email: "michaelbrown@example.com",
      Contact: "654-987-3210",
      Address: "123 Maple St, City, Country",
    },
    {
      Name: "Emily Johnson",
      Email: "emilyjohnson@example.com",
      Contact: "987-321-6540",
      Address: "456 Birch St, City, Country",
    },
    {
      Name: "David Wilson",
      Email: "davidwilson@example.com",
      Contact: "123-987-4560",
      Address: "789 Pine St, City, Country",
    },
    {
      Name: "Olivia Martin",
      Email: "oliviamartin@example.com",
      Contact: "321-789-6540",
      Address: "890 Cedar St, City, Country",
    },
    {
      Name: "Daniel Thompson",
      Email: "danielthompson@example.com",
      Contact: "654-321-9870",
      Address: "567 Maple St, City, Country",
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
                  {item.Email}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Contact}
                </div>
                <div className="table-cell py-[10px] px-[20px]">
                  {item.Address}
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

export default CustomerManagement;

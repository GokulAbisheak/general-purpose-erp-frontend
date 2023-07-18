import React from "react";

const AddEmployee = () => {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                Add Employee
              </div>
              <form>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Employee ID"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <input
                    type="text"
                    placeholder="Type"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <input
                    type="text"
                    placeholder="NIC"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <input
                    type="text"
                    placeholder="Contact"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <button
                    type="submit"
                    className="bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900"
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
import React from "react";

const AddFinance = () => {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                Add Transaction
              </div>
              <form>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <input
                    type="text"
                    placeholder="Amounts"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <select className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0">
                    <option disabled>Transaction type</option>
                    <option value="incoming">incoming</option>
                    <option vlaue="outgoing">outgoing</option>
                  </select>
                  <label>Transaction Date</label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                  ></input>
                  <button
                    type="submit"
                    className="bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900"
                  >
                    Add Transaction
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

export default AddFinance;

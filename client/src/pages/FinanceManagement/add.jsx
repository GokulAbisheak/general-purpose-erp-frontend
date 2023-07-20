import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFinance = () => {
  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("loggedBusiness"))
  );
  const [transactionID, setTransactionID] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const finance = {
      business: business._id,
      transactionId: transactionID,
      amount: amount,
      type: type,
      date: date,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/finance/add`, finance)
      .then((res) => {
        navigate("/finance");
      })
      .catch((err) => {alert(err)});
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                Add Transaction
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setTransactionID(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Amounts"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  ></input>
                  <select
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value="incoming">incoming</option>
                    <option value="outgoing">outgoing</option>
                  </select>
                  <label>Transaction Date</label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
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

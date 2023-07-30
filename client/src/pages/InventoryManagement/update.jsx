import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateInventory = () => {
  const state = useLocation().state;

  const [name, setName] = useState(state.item.name);
  const [quantity, setQuantity] = useState(state.item.quantity);
  const [category, setCategory] = useState(state.item.category);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inventory = {
      name: name,
      quantity: quantity,
      category: category,
    };

    axios
      .patch(
        `${import.meta.env.VITE_SERVER_URL}/inventory/update/${state.item._id}`,
        inventory
      )
      .then((res) => {
        navigate("/inventory");
      })
      .catch((error) => {
        alert("Error Updating");
      });
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[400px]">
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-neutral-800 font-bold text-2xl mb-[20px]">
                Update Item
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e)=>{setName(e.target.value)}}
                  ></input>
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e)=>{setQuantity(e.target.value)}}
                  ></input>
                  <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e)=>{setCategory(e.target.value)}}
                  ></input>
                  <button
                    type="submit"
                    className="bg-neutral-800 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-neutral-700"
                  >
                    Update Item
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

export default UpdateInventory;

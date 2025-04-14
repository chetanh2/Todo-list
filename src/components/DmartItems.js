import React, { useState } from "react";
import ListOfItems from "./ListOfItems";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const DmartItems = () => {
  const [items, setItems] = useState(defaultList);
  const [newItemName, setNewItemName] = useState("");

  const addItem = (itemName)=>{
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items,newItem]
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItemName){
      toast.error('please provide value')
      return
    }
    addItem(newItemName);
    setNewItemName("");
  }
  return (
    <div className="container shadow-xl p-6 mt-3">
      <ToastContainer position="top-center" />
      <p className="">shvsbvhsbvhdshvbhsbdvhsdbv</p>
      <form onClick={handleSubmit}>
        <div className="flex justify-center">
          <input
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className=" px-2 py-1 bg-[#f1f5f8] rounded-md flex-grow flex-shrink-0 flex-auto"
            type="text"
            placeholder="chocolates"
          />
          <button className="py-1 px-4 text-sm bg-[#a5d5f8] hover:bg-[#49a6e9] hover:text-white capitalize tracking-widest transition-all duration-200 ease-linear">
            add item
          </button>
        </div>
      </form>
      {/* <Items items={items} /> */}
    </div>
  );
};
export default DmartItems;

import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({
  addItem,
  newItemName,
  setNewItemName,
  isEditing,
  setItems,
  items,
  editID,
  setIsEditing,
  setLocalStorage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    if (newItemName && isEditing) {
      const newItems = items.map((item) => {
        if (item.id === editID) {
          return { ...item, title: newItemName };
        }
        return item;
      });
      setItems(newItems);
      setNewItemName("");
      setLocalStorage(newItems);
      setIsEditing(false);
      if (newItems) toast.success("item edited");
    } else {
      addItem(newItemName);
    }
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-4">Dmart Goods</h5>
      <div className="flex">
        <input
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className=" px-2 py-1 bg-[#f1f5f8] rounded-md flex-auto"
          type="text"
          placeholder="chocolates"
        />
        <button className="py-1 px-4 text-sm bg-[#a5d5f8] hover:bg-[#49a6e9] hover:text-white capitalize tracking-widest transition-all duration-200 ease-linear">
          {isEditing ? "edit" : "add"} item
        </button>
      </div>
    </form>
  );
};
export default Form;

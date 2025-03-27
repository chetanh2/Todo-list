import React, { useState } from "react";
import ListOfItems from "./ListOfItems";

const DmartItems = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("enter the value");
    } else {
      // Create a new item with a unique id and the user's input
      // const newItem = { id: `${Date.now()}`, title: name };
      const newItem1 = { id: `${Date.now()}`, title: name };
      const newItem = { id: new Date().getTime().toString(), title: name };
      console.log("newItem", newItem, newItem1);

      // Add the new item to the list by spreading the current list and adding the new item
      setList([...list, newItem]);
      setName("");
    }
  };
  console.log("list>>>>>>>", list);

  return (
    <div className="container shadow-xl p-6 mt-3">
      <p className="">shvsbvhsbvhdshvbhsbdvhsdbv</p>
      <form onClick={handleSubmit}>
        <div className="flex justify-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" px-2 py-1 bg-[#f1f5f8] rounded-md flex-grow flex-shrink-0 flex-auto"
            type="text"
            placeholder="chocolates"
          />
          <button className="py-1 px-4 text-sm bg-[#a5d5f8] hover:bg-[#49a6e9] hover:text-white capitalize tracking-widest transition-all duration-200 ease-linear">
            submit
          </button>
        </div>
      </form>
      {list.length > 0 && <ListOfItems list={list} />}
    </div>
  );
};
export default DmartItems;

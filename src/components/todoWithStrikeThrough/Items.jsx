import React from "react";
import { FaEdit } from "react-icons/fa";

const Items = ({ items, removeItem, toggleCompleted, editItem }) => {
  return (
    <div className="">
      {items?.map((item) => {
        return (
          <div
            key={item?.id}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-5 mt-6"
          >
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={item?.completed}
              onClick={() => toggleCompleted(item?.id)}
            />
            <p
              className={`m-0 capitalize ${
                item?.completed
                  ? "line-through"
                  : ""
              }`}
            >
              { item?.title}
            </p>
            <div className="flex gap-3">
              <button className="edit-btn" onClick={() => editItem(item?.id)}>
                <FaEdit className="text-lg" />
              </button>
              <button
                className="hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear rounded-md p-1 px-2 bg-black text-white text-sm"
                type="button"
                onClick={() => removeItem(item?.id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;

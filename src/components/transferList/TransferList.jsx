import React, { useState } from "react";
import { checkedArray, filterArray } from "./utils/checkedArray";
import TransferButtons from "./TransferButtons";
import List from "./List";
import { items } from "./data";
import "./transferlist.css";
function TransferList() {
  // State for the left list, right list, and checked items
  const [leftData, setLeftData] = useState(items);
  const [rightData, setRightData] = useState([]);
  const [checkedItem, setCheckedItems] = useState([]);

  // Function to handle toggling items
  const handleToggle = (item) => {
    const currIndex = checkedItem.indexOf(item);
    const newItem = [...checkedItem];

    if (currIndex === -1) {
      newItem.push(item);
    } else {
      newItem.splice(currIndex, 1);
    }

    setCheckedItems(newItem);
  };

  // Function to move selected items to the right list
  const rightBox = () => {
    setRightData(rightData.concat(checkedArray(leftData, checkedItem)));
    setLeftData(filterArray(leftData, checkedItem));
    setCheckedItems(
      filterArray(checkedItem, checkedArray(leftData, checkedItem))
    );
  };

  // Function to move selected items to the left list
  const leftBox = () => {
    setLeftData(leftData.concat(checkedArray(rightData, checkedItem)));
    setRightData(filterArray(rightData, checkedItem));
    setCheckedItems(
      filterArray(checkedItem, checkedArray(rightData, checkedItem))
    );
  };

  return (
    <div className="App flex justify-center items-center w-full mt-11">
      {/* Left List */}
      <div className="">
        <List data={leftData} handleToggle={handleToggle} />
      </div>

      {/* Transfer Buttons */}
      <TransferButtons rightBox={rightBox} leftBox={leftBox} />

      {/* Right List */}
      <List data={rightData} handleToggle={handleToggle} />
    </div>
  );
}

export default TransferList;

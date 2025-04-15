import React from "react";

function IndividualItem({ item, handleToggle }) {
  return (
    <div className="ml-5">
      {/* Checkbox for item selection */}
      <input type="checkbox" onChange={() => handleToggle(item)} />

      {/* Display the item's text */}
      <span className="mx-2">{item}</span>
    </div>
  );
}

export default IndividualItem;

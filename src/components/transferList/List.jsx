import React from "react";
import IndividualItem from "./IndividualItem";

function List({ data, handleToggle }) {
  return (
    <div className="List">
      {data.map((item) => (
        <div key={item} className="my-1 ">
          {/* Individual item with checkbox */}
          <IndividualItem item={item} handleToggle={handleToggle} />
        </div>
      ))}
    </div>
  );
}

export default List;

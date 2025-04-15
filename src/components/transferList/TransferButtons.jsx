import React from "react";

function TransferButtons({ leftBox, rightBox }) {
  return (
    <div className="Action">
      {/* Button to move items to the right */}
      <button className="bg-slate-200 px-3 py-1 rounded-lg" onClick={rightBox}>
        &gt;
      </button>

      {/* Button to move items to the left */}
      <button className="bg-slate-200 px-3 py-1 rounded-lg" onClick={leftBox}>
        &lt;
      </button>
    </div>
  );
}

export default TransferButtons;

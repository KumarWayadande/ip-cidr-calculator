import React from "react";

function IpAddressRow(props) {
    const {color} = props;
  return (
    <div className="octet flex">
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
      <div className="border-2 h-fit bg-amber-200">
        <span className="px-2 py-1">1</span>
      </div>
    </div>
  );
}

export default IpAddressRow;

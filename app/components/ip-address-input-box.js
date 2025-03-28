import React from "react";

function IpAddressInputBox() {
  return (
    <div>
      <input
        type="text"
        className="w-20 h-20 text-3xl py-2 text-center mx-2 text-black rounded-2xl bg-[#c084fc]"
        defaultValue="192"
        max={255}
      />
      <span className="text-5xl">.</span>
      <input
        type="text"
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#f87171]"
        defaultValue="122"
        max={255}
      />
      <span className="text-5xl">.</span>
      <input
        type="text"
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#4ade80]"
        defaultValue="121"
        max={255}
      />
      <span className="text-5xl">.</span>
      <input
        type="text"
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#facc15]"
        defaultValue="118"
        max={255}
      />
      {/* Slash  */}
      <span className="text-4xl">/</span>
      <input
        type="text"
        defaultValue="28"
        className="w-20 h-20 py-2 text-3xl mx-2 text-black text-center rounded-2xl bg-[#cbd5e1]"
      />
    </div>
  );
}

export default IpAddressInputBox;

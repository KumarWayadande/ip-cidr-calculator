"use client";
import { useState } from "react";

function IpAddressInputBox({getIp_Cidr}) {
  const [ip, setIp] = useState([196, 88, 135, 144]);
  const [cidr, setCidr] = useState(28);

  const handleCidr = (val) => {
    setCidr(Number(val));
  };

  function sendIp(){
    let finalIp = ip.map(String).join(".");
    finalIp = finalIp + "/" + cidr;
    getIp_Cidr(finalIp, cidr);
  }

  const handleIpChange = (val, index) => {
    setIp((prevIp) => {
      const newIp = [...prevIp];

      newIp[index] = Number(val);
      return newIp;
    });
    sendIp()
  };


  // console.log(ip, cidr);

  return (
    <div>
      <input
        onChange={(e) => handleIpChange(e.target.value, 0)}
        type="text"
        maxLength={3}
        min={0}
        max={255}
        className=" w-20 h-20 text-3xl py-2 text-center mx-2 text-black rounded-2xl bg-[#c084fc]"
      />
      <span className="text-5xl">.</span>
      <input
        onChange={(e) => handleIpChange(e.target.value, 1)}
        type="text"
        maxLength={3}
        min={0}
        max={255}
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#f87171]"
      />
      <span className="text-5xl">.</span>
      <input
        onChange={(e) => handleIpChange(e.target.value, 2)}
        type="text"
        maxLength={3}
        min={0}
        max={255}
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#4ade80]"
      />
      <span className="text-5xl">.</span>
      <input
        onChange={(e) => handleIpChange(e.target.value, 3)}
        type="text"
        maxLength={3}
        min={0}
        max={255}
        className="w-20 h-20 text-3xl py-2 mx-2 text-center text-black rounded-2xl bg-[#facc15]"
      />
      {/* Slash  */}
      <span className="text-4xl">/</span>
      <input
        type="text"
        onChange={(e) => handleCidr(e.target.value)}
        maxLength={2}
        min={0}
        max={32}
        defaultValue="28"
        className="w-20 h-20 py-2 text-3xl mx-2 text-black text-center rounded-2xl bg-[#cbd5e1]"
      />
    </div>
  );
}

export default IpAddressInputBox;

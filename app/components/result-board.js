import React from "react";

function ResultBoard() {
  return (
    <div className="result-board-container w-[95%] md:w-[80%]">
      {/* <div className="flex flex-row gap-x-4 gap-y-4 flex-wrap"> */}
      <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 between place-items-stretch text-center">
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            Netmask
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            CIDR Base IP
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            Broadcast IP
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            Count
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            First Usable IP
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">255.255.255.240</span>
          <span className="text-3xl text-stone-600 font-bold font-stretch-50%">
            Last Usable IP
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultBoard;

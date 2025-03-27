import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container flex flex-col justify-center items-center">
      <div className="main-container-child w-[80%] flex flex-col">
        <h1 className="text-stone-700 text-6xl font-black">
          IP / CIDR Calculator
        </h1>
        <div className="container main-board flex flex-row justify-center align-baseline border-2 border-stone-100 rounded-2xl py-8 px-10 my-12 mb-12 items-center">
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
      </div>
    </div>
  );
}

import IPAddressBoard from "./components/ip-address-board";
import IpAddressInputBox from "./components/ip-address-input-box";
import ResultBoard from "./components/result-board";

export default function Home() {
  return (
    <div className="main-container flex flex-col">
      <div className="main-container-child my-10 w-[100%] sm:w-[95%] md:w-[80%] mx-auto flex flex-col">
        <h1 className="text-stone-700 text-6xl text-center font-black">
          IP / CIDR Calculator
        </h1>
        <div className="container flex-wrap main-board gap-y-4 flex flex-row justify-center align-baseline border-2 border-stone-100 rounded-2xl py-8 px-10 my-12 mb-12 items-center">
          <IpAddressInputBox />
          <IPAddressBoard />
          <ResultBoard />
        </div>
      </div>
    </div>
  );
}

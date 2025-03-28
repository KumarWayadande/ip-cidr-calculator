import IPAddressBoard from "./components/ip-address-board";
import IpAddressInputBox from "./components/ip-address-input-box";

export default function Home() {
  return (
    <div className="main-container flex flex-col">
      <div className="main-container-child my-10 w-[100%] sm:w-[95%] md:w-[80%] mx-auto flex flex-col">
        <h1 className="text-stone-700 text-6xl text-center font-black">
          IP / CIDR Calculator
        </h1>
        <IpAddressInputBox />
        <IPAddressBoard />
      </div>
    </div>
  );
}

"use client";
import IPAddressBoard from "./components/ip-address-board";
import IpAddressInputBox from "./components/ip-address-input-box";
import ResultBoard from "./components/result-board";
import { Netmask } from "netmask";

export default function Home() {
  function getIp_Cidr(ip, cidr) {
    const block = new Netmask(ip);
    console.log(block);
    
  }

  return (
    <div className="main-container flex flex-col">
      <div className="main-container-child my-10 w-[100%] sm:w-[95%] md:w-[80%] mx-auto flex flex-col">
        <h1 className="text-stone-700 text-6xl text-center font-black">
          IP / CIDR Calculator
        </h1>
        <div className="container flex-wrap main-board gap-y-4 flex flex-row justify-center align-baseline border-[1px] border-stone-200 rounded-2xl py-8 px-10 my-12 mb-12 items-center">
          <IpAddressInputBox getIp_Cidr={getIp_Cidr} />
          <IPAddressBoard />
          <ResultBoard />
        </div>
        <div className="instructions-container text-lg text-justify">
          <p>
            CIDR (Classless Inter-Domain Routing) notation is a compact method
            for specifying IP address ranges and network masks. It is widely
            used in network configuration and management.
          </p>

          <p>
            An IP address consists of 4 octets, each containing 8 bits that
            represent values from 0 to 255. In CIDR notation, a forward slash
            (/) followed by a number indicates the length of the network prefix
            in bits.
          </p>

          <p>
            This prefix length determines the network mask and the number of
            available host addresses within the specified IP range. This
            calculator helps you visualize and understand these CIDR blocks,
            making network planning and configuration easier.
          </p>
        </div>
        <div className="footer text-center w-full mx-auto mt-10 pt-10 border-stone-400 border-t-[1px]">
          <span>
            Create by{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://kumarwayadande.tech"
            >
              Kumar Wayadande
            </a>
            . Source available on{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://github.com/KumarWayadande"
            >
              Github
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}

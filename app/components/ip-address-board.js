import IpAddressRow from "./ip-address-row";

function IPAddressBoard() {
  return (
    <div className="ip-address-board-container my-5">
      <div className="octets-container gap-x-2 gap-y-2 items-center justify-center flex flex-wrap md:flex-row">
        <IpAddressRow />
        <IpAddressRow />
        <IpAddressRow />
        <IpAddressRow />
      </div>
    </div>
  );
}

export default IPAddressBoard;

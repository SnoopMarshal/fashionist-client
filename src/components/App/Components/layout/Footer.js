import React from "react";
import facebook from "./../../../../assets/icons/ficon.png";
import instagram from "./../../../../assets/icons/iicon.png";
import twitter from "./../../../../assets/icons/ticon.png";
import Icon from "@material-ui/core/Icon";

export default function Footer() {
  return (
    <div className="w-full lt-bg-accent lt-footer flex flex-col justify-evenly">
      <div className="w-full flex flex-col  md:flex-row">
        <div className="flex flex-col w-full md:w-1/3 justify-center items-center pl-4 pb-2 md:pb-0">
          <div className="flex items-center">
            <Icon className="lt-text-primary lt-icon-sm">room</Icon>
            <span className="text-white">421 Goldleaf Lane,</span>
          </div>
          <span className="text-white">Red Bank, New Jersey,</span>
          <span className="text-white">07701</span>
        </div>
        <div className="flex w-full md:w-1/3 justify-around items-center">
          <div className="flex items-center h-8 w-8">
            <img src={facebook} alt="logo" />
          </div>
          <div className="flex items-center h-8 w-8">
            <img src={instagram} alt="logo" />
          </div>
          <div className="flex items-center h-8 w-8">
            <img src={twitter} alt="logo" />
          </div>
        </div>
        {/* <div className="flex w-1/3"></div> */}
      </div>
      <span>&copy; Little Tags Shop Pvt. LTD</span>
    </div>
  );
}

import React from "react";
import facebook from "./../../../../assets/icons/ficon.png";
import instagram from "./../../../../assets/icons/iicon.png";
import twitter from "./../../../../assets/icons/ticon.png";
import logo from "./../../../../assets/logo/fashionist.png";
export default function Footer() {
  return (
    <div className="w-full lt-bg-grey lt-footer flex justify-evenly">
      <div className="flex flex-col w-1/3 pt-12 pl-10">
        <div className="w-1/3">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col mt-4">
          <span className="lt-text-grey uppercase">
            copyright &copy; 2021 fashionist
          </span>
          <span className="lt-text-grey uppercase mt-2">
            all rights reserved
          </span>
        </div>
      </div>
      <div className="w-1/3 pt-12 px-4 flex">
        <div className="w-1/2">
          <div className="flex flex-col">
            <span className="font-semibold">About Fashionist</span>
            <div className="flex flex-col mt-2">
              <span className="text-xs lt-text-grey">About us</span>
              <span className="text-xs underline">Offices</span>
              <span className="text-xs lt-text-grey">Work with us</span>
              <span className="text-xs lt-text-grey">Our policies</span>
              <span className="text-xs lt-text-grey">Affinity card</span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
        <div className="flex flex-col">
            <span className="font-semibold">Shopguide</span>
            <div className="flex flex-col mt-2">
            <span className="text-xs lt-text-grey">About us</span>
              <span className="text-xs lt-text-grey">Returns</span>
              <span className="text-xs lt-text-grey">Gift Card</span>
              <span className="text-xs lt-text-grey">Guest Purchase</span>
              <span className="text-xs lt-text-grey">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 pt-12 px-4">
      <div className="">
          <span className="font-semibold">Newsletter</span>
        </div>
        <div className="">
          <span className="uppercase lt-text-grey">subscribe to our newsletter</span>
        </div>
        <div className="w-full mt-4">
          <input type="email" className="w-full py-2 pl-2 bg-white focus:outline-none" placeholder="ENTER YOUR EMAIL"/>
        </div>
        <div className="flex mt-4">
        <img className="h-6 w-6" src={facebook} alt="logo" />
        <img className="h-6 w-6 ml-4" src={instagram} alt="logo" />
        <img className="h-6 w-6 ml-4" src={twitter} alt="logo" />
        </div>
      </div>
    </div>
  );
}

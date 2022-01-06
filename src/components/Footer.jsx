import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-2/3 mx-auto py-12 flex justify-between">
        <div className="flex flex-col text-white gap-y-6">
          <div className="flex flex-col gap-y-1">
            <Link to="/" className="text-xl font-semibold">
              Book Me
            </Link>
            <p className="text-xs">2022 Designed By Khalid</p>
          </div>
          <div className="flex gap-x-6">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <BsTwitter />
            </span>
          </div>
          <div className="flex flex-col text-xs gap-1 ">
            <p>Privacy policy</p>
            <p>Cookie policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <div className="flex flex-col text-white gap-y-6">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold">Contact</h1>
          </div>
          <p className="text-xs">MO - FR from 10:00 to 18:00</p>
          <div className="flex flex-col gap-y-1 text-sm">
            <span>+9647509999999</span>
            <span>+9647709999999</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
        <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold">Menu</h1>
          </div>
<div className="flex gap-x-12 text-xs ">
<div className="flex flex-col gap-y-2">
    <span>For tourists</span>
    <span>For travel agencies</span>
    <span>For tourists</span>
</div>
<div className="flex flex-col gap-y-2">
    <span>Stocks</span>
    <span>Contacts</span>
    <span>About us</span>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

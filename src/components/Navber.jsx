import React, { useState } from "react";
import logo from "../assets/logo.png";
import mobile_logo from "../assets/m-logo.png";
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
const Navber = () => {
  const [showNab, setshowNab] = useState(false);
  return (
    <>
      {/* ------------large------------ */}
      <nav id="navber" className="hidden lg:block font-poppins">
        <div className="container">
          <div className="navRow flex  justify-between items-center py-[27px]">
            <Link to={'/'} className="log">
              <img src={logo} alt="logo" />
            </Link>
            <div className="Navsearch bg-bg w-[400px] h-[52px] rounded-[100px] px-6 flex items-center">
              <CiSearch className="w-5 h-5 mr-2.5" />
              <input
                placeholder="Search in products..."
                className="flex-1 outline-none text-[14px] text-text"
                type="text"
              />
            </div>
            <div className="Navicons flex relative gap-[22px]">
              <button>
                <BiUser className="w-6 h-6 text-text" />
              </button>
              <button>
                <BsCartPlus className="w-6 h-6 text-text" />
              </button>
              <div className="w-5 h-5 bg-vibrant font-medium text-[12px] text-white text-center rounded-full absolute -top-2.5 -right-1.5">
                3
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* -------------mobile------------- */}
      <nav id="navber" className=" lg:hidden mx-2 font-poppins">
        <div className="navRow flex  justify-between items-center py-[27px]">
          <Link to={'/'} className="log">
            <img src={mobile_logo} alt="logo" />
          </Link>
          <div className="Navsearch bg-bg w-[200px] h-9 rounded-[100px] px-4 flex items-center">
            <CiSearch className="w-3.5 h-3.5 mr-1.5" />
            <input
              placeholder="Search in products..."
              className="flex-1 outline-none text-[12px] text-text"
              type="text"
            />
          </div>

          <button onClick={()=>setshowNab(!showNab)}>
            <FaBars className="w-6 h-6 text-text" />
            
          </button>
          {showNab && (
              <div className="Navicons w-[300px] py-1 absolute top-[70px] left-2 flex gap-[11px] bg-border justify-center z-10">
                <button>
                  <BiUser className="w-6 h-6 text-text" />
                </button>
                <button className="relative">
                  <BsCartPlus className="w-6 h-6 text-text relative" />
                  <div className="w-5 h-5 bg-vibrant font-medium text-[12px] text-white text-center rounded-full absolute -top-2.5 -right-1.5">
                    3
                  </div>
                </button>
              </div>
            )}
        </div>
      </nav>
    </>
  );
};

export default Navber;

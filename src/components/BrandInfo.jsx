import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

const BrandInfo = () => {
  return (
    <>
      <section id="brand-info" className=" hidden lg:block ">
        <div className="container border border-border h-[98px] mt-[52px] mb-8 rounded-2xl flex justify-between items-center px-10">
          {/* -------------item-1------------- */}
          <div className="info_1 flex items-center gap-3 ">
            <div className="text-4xl text-primary">
              <TbTruckDelivery />
            </div>
            <div className="font-poppins">
              <h3 className=" font-semibold text-primary text-[18px] ">
                Free shipping
              </h3>
              <p className=" font-[14px] text-text  ">
                On orders over $50.00
              </p>
            </div>
          </div>
          {/* -------------item-2------------- */}
          <div className="info_1 flex items-center gap-3 ">
            <hr className="w-px h-12 bg-border border-0 " />
            <div className="text-2xl text-primary">
              <GiReturnArrow />
            </div>
            <div className="font-poppins">
              <h3 className=" font-semibold text-primary text-[18px] ">
                Very easy to return
              </h3>
              <p className=" font-[14px] text-text  ">
                Just phone number
              </p>
            </div>
          </div>
          {/* -------------item-3------------- */}
          <div className="info_1 flex items-center gap-3 ">
            <hr className="w-px h-12 bg-border border-0 " />
            <div className="text-2xl text-primary">
              <TfiWorld />
            </div>
            <div className="font-poppins">
              <h3 className=" font-semibold text-primary text-[18px] ">
                Worldwide delivery
              </h3>
              <p className=" font-[14px] text-text  ">
                Fast delivery worldwide
              </p>
            </div>
          </div>
          {/* -------------item-4------------- */}
          <div className="info_1 flex items-center gap-3 ">
            <hr className="w-px h-12 bg-border border-0 " />
            <div className="text-3xl text-primary">
              <RiRefund2Line />
            </div>
            <div className="">
              <h3 className=" font-semibold text-primary text-[18px] font-poppins">
                Refunds policy
              </h3>
              <p className=" font-[14px] text-text font-poppins">
                60 days return for any reason
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ---------------------Mobile--------------------- */}
      <section id="brand-infoM" className="py-[52px] pl-6 lg:hidden">
        <h3 className=" font-semibold text-base text-primary font-poppins ">Nexton® always with you</h3>
        <div className=" flex flex-wrap mt-6 gap-6">
          {/* -------------item-1------------- */}
          <div className="info_1 flex items-center gap-2 ">
            <div className="text-[20px] text-text">
              <TbTruckDelivery />
            </div>
              <h3 className=" font-normal text-text text-[14px] font-poppins">
                Free shipping
              </h3>
          </div>
          {/* -------------item-2------------- */}
          <div className="info_1 flex items-center gap-2 ">
            <div className="text-[15px] text-text">
              <GiReturnArrow />
            </div>
              <h3 className=" font-normal text-text text-[14px] font-poppins">
                Very easy to return
              </h3>
          </div>
          {/* -------------item-3------------- */}
          <div className="info_1 flex items-center gap-2 ">
            <div className="text-[18px] text-text">
              <TfiWorld />
            </div>
              <h3 className=" font-normal text-text text-[14px] font-poppins">
                Fast delivery worldwide
              </h3>
          </div>
          {/* -------------item-4------------- */}
          <div className="info_1 flex items-center gap-2 ">
            <div className="text-[20px] text-text">
              <RiRefund2Line />
            </div>
              <h3 className=" font-normal text-text text-[14px] font-poppins">
                Refunds policy
              </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandInfo;

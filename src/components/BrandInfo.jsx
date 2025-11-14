import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const BrandInfo = () => {
  return (
    <>
      <section id="brand-info">
        <div className="container border border-border h-[98px] mt-[52px] mb-8 rounded-2xl flex justify-between items-center px-10 text-poppins">
          {/* -------------item-1------------- */}
          <div className="info_1 flex items-center gap-3 ">
            <div className="text-4xl text-primary">
              <TbTruckDelivery />
            </div>
            <div className="">
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
            <div className="text-4xl text-primary">
              <TbTruckDelivery />
            </div>
            <div className="">
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
            <div className="text-4xl text-primary">
              <TbTruckDelivery />
            </div>
            <div className="">
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
            <div className="text-4xl text-primary">
              <TbTruckDelivery />
            </div>
            <div className="">
              <h3 className=" font-semibold text-primary text-[18px] ">
                Refunds policy
              </h3>
              <p className=" font-[14px] text-text ">
                60 days return for any reason
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandInfo;

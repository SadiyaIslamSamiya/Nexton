import React from "react";
import { Link } from "react-router";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import stripe from "../assets/stripe.png";
import verisign from "../assets/verisign.png";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import twittet from "../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="">
        <hr className="text-border" />

        {/* ----------big footer---------- */}
        <div className="big-footer my-12 lg:my-[60px] mx-6 lg:mx-0">
          <div className="container flex flex-col lg:flex-row justify-between gap-[60px] lg:items-center">
            {/* ---------col-1--------- */}
            <div className="">
              <img src={logo} alt="logo" />
              <ul className="text-[14px] lg:text-base font-poppins text-text mt-5">
                <li className="flex gap-1 mb-3">
                  <img src={facebook} alt="facebook" className="w-5 h-5" />
                  Facebook
                </li>
                <li className="flex gap-1 mb-3">
                  <img src={youtube} alt="youtube" className="w-5 h-5" />
                  Youtube
                </li>
                <li className="flex gap-1 mb-3">
                  <img src={telegram} alt="telegram" className="w-5 h-5" />
                  Telegram
                </li>
                <li className="flex gap-1 mb-3">
                  <img src={twittet} alt="twitter" className="w-5 h-5" />
                  Twitter
                </li>
              </ul>
            </div>
            {/* ---------col-2--------- */}
            <div className="">
              <h3 className="mb-5 font-poppins text-primary text-[14px] lg:text-base font-semibold">
                Getting started
              </h3>
              <ul className="font-poppins text-text text-[14px] lg:text-base font-normal">
                <li className="mb-3 lg:mb-4">Release Notes</li>
                <li className="mb-3 lg:mb-4">Upgrade Guide</li>
                <li className="mb-3 lg:mb-4">Browser Support</li>
                <li className="mb-3 lg:mb-4">Dark Mode</li>
              </ul>
            </div>
            {/* ---------col-3--------- */}
            <div className="">
              <h3 className="mb-5 font-poppins text-primary text-[14px] lg:text-base font-semibold">
                Explore
              </h3>
              <ul className="font-poppins text-text text-[14px] lg:text-base font-normal">
                <li className="mb-3 lg:mb-4">Prototyping</li>
                <li className="mb-3 lg:mb-4">Design systems</li>
                <li className="mb-3 lg:mb-4">Pricing</li>
                <li className="mb-3 lg:mb-4">Security</li>
              </ul>
            </div>
            {/* ---------col-4--------- */}
            <div className="">
              <h3 className="mb-5 font-poppins text-primary text-[14px] lg:text-base font-semibold">
                Community
              </h3>
              <ul className="font-poppins text-text text-[14px] lg:text-base font-normal">
                <li className="mb-3 lg:mb-4">Discussion Forums</li>
                <li className="mb-3 lg:mb-4">Code of Conduct</li>
                <li className="mb-3 lg:mb-4">Contributing</li>
                <li className="mb-3 lg:mb-4">API Reference</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-border" />

        {/* ----------small footer---------- */}
        <div
          className="small-footer my-5
         lg:my-8 "
        >
          <div className="container flex flex-col lg:flex-row justify-between items-center gap-3">
            <Link className="text-text font-poppins text-[14px] lg:text-base">
              Nexton eCommerce. © 2024
            </Link>
            <div className=" flex gap-1 h-[23px] lg:h-8">
              <img src={visa} alt="vise" />
              <img src={paypal} alt="paypal" />
              <img src={stripe} alt="stripe" />
              <img src={verisign} alt="verisign" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

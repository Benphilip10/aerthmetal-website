import React from "react";
import { Footer } from "../sections";
import email from "../assets/images/email.png";
import address from "../assets/images/address.png";
import phone from "../assets/images/phone.png";

const Contact = () => {
  return (
    <>
      <section className="max-container">
        <div
          className="w-full h-[400px] bg-contact-bg max-container relative"
          data-aos="zoom-in-up"
          data-aos-duration="900"
        >
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button
              className="bg-[#012352] text-white
             px-3 py-2 rounded-full "
            >
              Contact Us
            </button>
            <h1 className="text-4xl mt-4 ml-1 text-white font-medium ">
              Contact Us
            </h1>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        >
          <div className="padding">
            <h1 className="font-medium text-black text-3xl mt-10">
              Contact Us
            </h1>
            <h1 className="text-base text-[#40444D] mt-8">
              For support or enquiries related to Aerthmetal’s services please
              contact us using the form on this page or use the provided email
              address and phone number to contact us directly.
            </h1>
            <div className="border-[#B0BBCA] border-[1.5px] rounded-2xl flex space-x-4 h-[60px] items-center mt-8">
              <div className="bg-[#B0BBCA] py-[17px] px-[22px] rounded-tl-2xl rounded-bl-2xl">
                <img src={email} alt="image" />
              </div>
              <div>
                <h1 className="font-medium">Email</h1>
                <h1 className="text-[#40444D]">info@aerthmetal.com</h1>
              </div>
            </div>
            <div className="border-[#B0BBCA] border-[1.5px] rounded-2xl flex space-x-4 h-[60px] items-center mt-6">
              <div className="bg-[#B0BBCA] py-[11px] px-5 rounded-tl-2xl rounded-bl-2xl">
                <img src={phone} />
              </div>
              <div>
                <h1 className="font-medium">Phone</h1>
                <h1 className="text-[#40444D]">+234 8100 144 500</h1>
              </div>
            </div>
            <div className="border-[#B0BBCA] border-[1.5px] rounded-2xl flex space-x-4 h-[70px] items-center mt-6">
              <div className="bg-[#B0BBCA] py-[20px] px-6 rounded-tl-2xl rounded-bl-2xl">
                <img src={address} />
              </div>
              <div>
                <h1 className="font-medium">Address</h1>
                <h1 className="leading-4 mt-1 text-[#40444D]">
                  Block 3, Tony Eronmosele Street, Parkview Estate, Ikoyi,
                  Lagos.
                </h1>
              </div>
            </div>
          </div>
          <div className="border-[#B0BBCA] border-[1.5px] p-8 mt-10 rounded-xl mr-16">
            <div className="flex items-center justify-between">
              <div className="flex flex-col mb-2">
                <label className="text-[#3002353] font-medium mb-3">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="border-[1px] border-[#BOBBCA] rounded-md p-4  placeholder:text-[rgba(0,0,0,0.6)]placeholder:font-normal"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-[#3002353] font-medium mb-3">
                  Work email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="border-[1px] border-[#BOBBCA] rounded-md p-4  placeholder:text-[rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

            <div className="flex flex-col mt-9">
              <label className="text-[#3002353] font-medium mb-3">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="border-[1px] border-[#BOBBCA] rounded-md p-4  placeholder:text-[rgba(0,0,0,0.6)] h-[250px]"
              />
            </div>
            <button className="mt-8 bg-[#B0BBCA] px-10 py-2 rounded-full text-white">
              Submit
            </button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;

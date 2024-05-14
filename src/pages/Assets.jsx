import { useState } from "react";
import ApproachCard2 from "../components/ApproachCard2";

import icon_1 from "../assets/images/Frame 1.png";

import icon_2 from "../assets/images/Frame 2.png";

import icon_3 from "../assets/images/Frame 3.png";

import arrow_left from "../assets/icons/arrow_left.svg";

import arrow_right from "../assets/icons/arrow_right.svg";
import { Footer } from "../sections";
import uke1 from "../assets/images/UKE I.png";
import uke2 from "../assets/images/UKE II.png";

const cards = [
  {
    icon: icon_1,
    title: "Exploration Drilling Program/Resource Estimation",
    body: "Hiring experienced drilling contractors and forming a technical committee to oversee the exploration drilling program, Conducting laboratory analysis, resource estimation, and ore body modeling and Collaborating with independent technical advisors to validate findings and make informed decisions on capital allocation for development",
  },

  {
    icon: icon_2,
    title: "Exploration and Mineral Resource Estimation",
    body: "Conducting comprehensive asset acquisition and reviewing regional and local mapping data, implementing various exploration techniques such as drilling, sampling, and surveys to identify potential mineral deposits and utilizing laboratory analysis for accurate geological studies and technical reports.",
  },

  {
    icon: icon_3,
    title: "Asset/Project Documentation & Financing",
    body: "Structuring prospective mining assets into an investment company format, Preparing pre-feasibility documentation covering technical, financial, governance, environmental & social, logistics, regulatory compliance aspects and Raising capital with the support of professionals and advisors to fund the exploration program.",
  },
];
const cards2 = [
  {
    icon: icon_1,
    title: "UKE I",
    body: "Uke I asset is the first of the mines to be developed as flagship of the Uke Gold Co with a strike length of over 1.2km. An initial drilling program totaling 60 holes for 4890 meters - 500 meters of Diamond core and 4390 meters for RC drilling is currently being evaluated with the aim of identifying a maiden mineral resource.",
  },

  {
    icon: icon_2,
    title: "UKE II",
    body: "Uke II asset also located within the Uke gold area to be developed in the Uke Gold Co with a strike length of over 1 km. An initial drilling program totaling 51 holes for 2940 meters - 600 meters of Diamond core and 2340 meters for RC drilling is currently being evaluated with the aim of identifying a maiden mineral resource.",
  },
];

const Assets = () => {
  const [position, setPosition] = useState(0); // Initial position of the slider
  const [canMoveLeft, setCanMoveLeft] = useState(false); // State to track if left button can be clicked
  const [canMoveRight, setCanMoveRight] = useState(true); // State to track if right button can be clicked
  const [isAnnual, setIsAnnual] = useState(true);

  // Move Slider function
  const moveSlider = (direction) => {
    if (direction === "left" && position > 0) {
      setPosition(position - 1);
      setCanMoveRight(true);
      if (position === 1) setCanMoveLeft(false);
    } else if (direction === "right" && position < cards.length - 2) {
      setPosition(position + 1);
      setCanMoveLeft(true);
      if (position === cards.length - 2) setCanMoveRight(false);
    }
  };
  return (
    <>
      <section className="max-container">
        <div
          className="w-full h-[400px] bg-assets-image max-container relative"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button
              className="bg-[#012352] text-white
             px-7 py-2 rounded-full "
            >
              Assets
            </button>
            <h1 className="text-5xl mt-3 text-white font-medium ">Assets</h1>
          </div>
        </div>
        <div
          className="max-container h-fit w-full padding mt-11"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <div>
            <h1 className="font-bold text-[#002353] text-3xl">
              Comprehensive Mining Asset Development Program
            </h1>
            <p className="text-[#25282D] w-[90%] mt-4 font-normal">
              Aerthmetal&apos;s "Unlocking Opportunities" program presents a
              strategic initiative aimed at leveraging undervalued mineral
              assets to their full potential. Through a phased approach that
              mirrors the traditional mining life-cycle, Aerthmetal employs
              various techniques and processes to accelerate investments and
              maximize returns. Here&apos&apos;s a breakdown of the
              program&apos;s key phases:
            </p>
          </div>
        </div>
        <div className="w-screen h-[550px] flex flex-col padding bg-white relative">
          <div className="w-full overflow-x-hidden">
            <div
              className="flex gap-8 px-1 py-5 transition-transform duration-700 "
              style={{ transform: `translateX(-${position * 25}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  className="w-2/5 flex-shrink-0"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                >
                  <ApproachCard2
                    key={index}
                    iconImg={card.icon}
                    title={card.title}
                    body={card.body}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-row justify-between bottom-4 items-center"
            data-aos="zoom-in-up"
            data-aos-duration="900"
          >
            <div className="mt-3 flex gap-8 mr-28">
              <button
                onClick={() => moveSlider("left")}
                disabled={!canMoveLeft}
              >
                <img
                  src={arrow_left}
                  height={45}
                  width={45}
                  className="bg-white p-3 rounded-full drop-shadow-lg"
                  alt="Left Arrow"
                />
              </button>
              <button
                onClick={() => moveSlider("right")}
                disabled={!canMoveRight}
              >
                <img
                  src={arrow_right}
                  height={45}
                  width={45}
                  className="bg-white p-3 rounded-full drop-shadow-lg"
                  alt="Right Arrow"
                />
              </button>
            </div>
            <div
              className="w-full h-2 bg-gray-300 rounded-full overflow-hidden relative mt-3"
              data-aos="zoom-in-down"
              data-aos-duration="900"
            >
              <div
                className="h-full bg-blue-500 absolute"
                style={{
                  width: "50%",
                  left: `${position * 50}%`,
                  transition: "left 0.3s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="max-container h-fit w-full padding mt-4"
          data-aos="zoom-out"
          data-aos-duration="900"
        >
          <h1 className="text-[#002353] text-2xl font-semibold">Our Assets</h1>
          <h1 className="text-[#002353] text-4xl font-semibold mt-1">
            UKE GOLD CO
          </h1>
          <p className="mt-4 w-[90%]">
            Aerthmetal is investing sustainably in the Uke area, Karu Local
            Government Area, Nasarawa state with a well-rounded industrial hub
            approach that will be implemented in phases through the asset life
            cycle. The industrial hub will contain two open-pit mines that will
            produce gold ore, which will be transported to a central processing
            plant for gold production.  The Uke Gold Project is a private sector
            led joint venture in partnership with Nasarawa State Government. 
          </p>
          <div className="w-full bg-map-bg h-[400px] bg-cover mt-16"></div>
        </div>
        <div
          className="w-screen h-[450px] flex flex-col padding bg-white relative mt-12"
          data-aos="fade-right-down"
          data-aos-duration="900"
        >
          <h1 className="text-[#002353] text-2xl font-semibold">UKE I&II</h1>
          <div className="w-full overflow-x-hidden">
            <div className="flex gap-8 px-1 py-5 transition-transform duration-700 ">
              {cards2.map((card, index) => (
                <div className="w-[48%] flex-shrink-0" key={index}>
                  <ApproachCard2
                    key={index}
                    iconImg={card.icon}
                    title={card.title}
                    body={card.body}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className=" h-fit w-full padding "
          data-aos="zoom-in-up"
          data-aos-duration="900"
        >
          <div className="w-full flex justify-center">
            <div className="flex justify-center w-2/4 mb-8">
              <div className="relative flex w-full justify-center p-1 bg-white rounded-md">
                <span
                  className="absolute inset-0 m-1 pointer-events-none"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 w-1/2 bg-[#002353] border-[#d0ddd5] border-2 rounded-md shadow-sm shadow-[#144a27] transform transition-transform duration-150 ease-in-out ${
                      isAnnual ? "translate-x-0" : "translate-x-full"
                    }`}
                  ></span>
                </span>
                <button
                  className={`relative flex-1 text-lg font-normal h-12 rounded-tl-md rounded-bl-md focus-visible:outline-none focus-visible:ring focus-visible:ring-[#144a27] dark:focus-visible:ring-[#144a27] transition-colors duration-150 texts ease-in-out tracking-wide ${
                    isAnnual
                      ? "text-white"
                      : "text- dark:text-black bg-[#d0ddd5]"
                  }`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Asset Profile UKE I
                </button>
                <button
                  className={`relative flex-1 text-lg font-normal h-12 rounded-tr-md rounded-br-md focus-visible:outline-none focus-visible:ring focus-visible:ring-[#144a27] dark:focus-visible:ring-[#144a27]  transition-colors duration-150 -ml-[3px] texts ease-in-out tracking-wide ${
                    isAnnual
                      ? "text-black dark:text-black bg-[#d0ddd5]"
                      : "text-white "
                  }`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                >
                  Asset Profile UKE II
                </button>
              </div>
            </div>
          </div>
          {isAnnual ? (
            <img src={uke2} alt="uke" className="-mb-96 " />
          ) : (
            <img src={uke1} alt="uke" />
          )}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Assets;

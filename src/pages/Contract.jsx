import React, { useState } from "react";
import icon_1 from "../assets/images/open pit 1.png";

import icon_2 from "../assets/images/pit.png";

import icon_3 from "../assets/images/pit 2.png";
import icon_4 from "../assets/images/Image.png";
import icon_5 from "../assets/images/pit 3.png";
import icon_6 from "../assets/images/remote-icon1.png";
import icon_7 from "../assets/images/remote-icon2.png";

import arrow_left from "../assets/icons/arrow_left.svg";

import arrow_right from "../assets/icons/arrow_right.svg";
import ApproachCard2 from "../components/ApproachCard2";
import ApproachCard3 from "../components/ApproachCard3";
import { Footer } from "../sections";
const cards = [
  {
    icon: icon_1,
    title: "Open Pit Contract Mining Services",
    body: "Our expertise extends to open pit contract mining, delivering efficient and safe extraction processes.",
  },

  {
    icon: icon_2,
    title: "Mine Planning and Optimization",
    body: "Aerthmetal specializes in mine planning and optimization services, maximizing resource utilization & efficiency.",
  },

  {
    icon: icon_3,
    title: "Civil & Infrastructure Construction",
    body: "Aerthmetal is equipped for comprehensive construction projects, including roads, tailing dams, and site facilities",
  },
  {
    icon: icon_4,
    title: "Mining Project Management",
    body: "We offer end-to-end project management services, providing equipment & operators for seamless operations.",
  },
  {
    icon: icon_5,
    title: "Feasibility Study Consulting",
    body: "Our experienced team provides feasibility study consulting services, offering valuable insights for decision making.",
  },
];
const cards2 = [
  {
    icon: icon_6,
    body: "Aerthmetal has been at the forefront of innovation with the establishment of our Remote Operations Center.",
  },

  {
    icon: icon_7,
    body: "Real-time data monitoring and control capabilities empower us to oversee operations at multiple sites simultaneously and ensuring efficiency and productivity.",
  },
];

const Contract = () => {
  const [position, setPosition] = useState(0); // Initial position of the slider
  const [canMoveLeft, setCanMoveLeft] = useState(false); // State to track if left button can be clicked
  const [canMoveRight, setCanMoveRight] = useState(true); // State to track if right button can be clicked

  // Move Slider function
  const moveSlider = (direction) => {
    if (direction === "left" && position > 0) {
      setPosition(position - 1);
      setCanMoveRight(true);
      if (position === 1) setCanMoveLeft(false);
    } else if (direction === "right" && position < cards.length - 1) {
      setPosition(position + 1);
      setCanMoveLeft(true);
      if (position === cards.length - 2) setCanMoveRight(false);
    }
  };
  return (
    <>
      <section className="max-container">
        <div
          className="w-full h-[400px] bg-contract-bg max-container relative"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button
              className="bg-[#012352] text-white
             px-7 py-2 rounded-full "
            >
              Contract
            </button>
            <h1 className="text-5xl mt-3 text-white font-medium ">Contract</h1>
          </div>
        </div>
        <div
          className="max-container h-fit w-full padding mt-11"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div>
            <h1 className="font-bold text-[#002353] text-2xl">
              Contract Mining Services by Aerthmetal
            </h1>
            <p className="text-[#25282D] w-[90%] mt-4 font-normal">
              At Aerthmetal, we set ourselves apart in the mining industry by
              offering fully integrated mining support services and solutions
              designed to meet the unique requirements of each project. Our
              commitment to operational excellence and sustainable profitability
              is driven by the strategic use of cutting-edge technology, high
              efficient equipment, and experienced operational teams.
            </p>
          </div>
        </div>
        <div
          className="w-screen h-[600px] flex flex-col padding bg-white relative mt-8"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h1 className="font-bold text-[#002353] text-2xl mb-3">
            Project Services
          </h1>
          <div className="w-full overflow-x-hidden">
            <div
              className="flex gap-8 px-1 py-5 transition-transform duration-700 "
              style={{ transform: `translateX(-${position * 28}%)` }}
            >
              {cards.map((card, index) => (
                <div className="w-2/5 flex-shrink-0" key={index}>
                  <ApproachCard3
                    key={index}
                    iconImg={card.icon}
                    title={card.title}
                    body={card.body}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between bottom-4 items-center">
            <div className="mt-3 flex gap-8 mr-28">
              <button
                onClick={() => moveSlider("left")}
                disabled={!canMoveLeft}
              >
                <img
                  src={arrow_left}
                  height={55}
                  width={55}
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
                  height={55}
                  width={55}
                  className="bg-white p-3 rounded-full drop-shadow-lg"
                  alt="Right Arrow"
                />
              </button>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden relative mt-3">
              <div
                className="h-full bg-[#002353] absolute"
                style={{
                  width: "20%",
                  left: `${position * 20}%`,
                  transition: "left 0.3s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="padding mt-14"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <h1 className="font-bold text-[#002353] text-2xl">
            Remote Operations Center (ROC)
          </h1>

          <p className="text-[#25282D] w-[90%] mt-4 font-normal">
            Our ROC enables us to optimize production, improve safety, and
            reduce costs. Our team of operators, engineers, and geologists work
            together to analyze data, identify trends, and make data-driven
            decisions to ensure our mining operations are running at peak
            efficiency.
          </p>
        </div>
        <div
          className="w-screen h-[300px] flex flex-col padding bg-white relative "
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="w-full overflow-x-hidden">
            <div className="flex gap-8 px-1 py-5 transition-transform duration-700 ">
              {cards2.map((card, index) => (
                <div className="w-[47%] flex-shrink-0" key={index}>
                  <div className="bg-[#e7e8ee] drop-shadow-md rounded-lg p-5 w-full h-full">
                    <div className="p-2 rounded-md flex flex-col">
                      <div className="flex gap-3 items-center">
                        <div className="flex items-center space-x-5">
                          <img
                            className="rounded-lg"
                            src={card.icon}
                            height={90}
                            width={90}
                          />
                          <div>
                            <p className="font-light leading-6 mb-2 text-[15px]">
                              {card.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contract;

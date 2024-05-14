import React, { useState } from "react";
import icon_1 from "../assets/images/samuel.png";

import icon_2 from "../assets/images/team2.png";

import icon_3 from "../assets/images/samuel.png";
import icon_4 from "../assets/images/team_img4.png";
import icon_5 from "../assets/images/samuel.png";
import icon_6 from "../assets/images/black.png";

import arrow_left from "../assets/icons/arrow_left.svg";

import arrow_right from "../assets/icons/arrow_right.svg";
import grad1 from "../assets/images/grad1.png";
import grad2 from "../assets/images/grad2.png";
import grad3 from "../assets/images/card3.png";
import grad4 from "../assets/images/card4.png";
import back from "../assets/images/back.png";
import { Footer } from "../sections";

const cards = [
  {
    icon: icon_1,
    name: "Sam Agbevem",
    post: "President & Board Chair",
    bio: "Samuel is a seasoned business analyst and strategist with a track record of guiding both established and startups across Africa towards successful transformation. His leadership has resulted in the development of resilient organizations known for generating lasting value for their stakeholders. With over two decades of experience at Ernst & Young, including managing the West Africa business portfolio for Financial Accounting Advisory Services and Climate Change & Sustainability Services units, Samuel has played a pivotal role in restructuring high-profile organizations in West Africa and the UK, fostering resilience and long-term value creation. His expertise extends to the mining and energy sectors, with practical and consulting experience gained from leading companies such as Newmont, Golden Star Resources Limited, AngloGold Ashanti, and NNPC Ltd, CEO of Pacific Metals Limited and Power Alluvia Ltd. He was also overseeing operations and management in Ghana. Samuel is a chartered accountant with an MBA in Finance from the University of Hull Business School and a Bachelor of Commerce Degree from the University of Cape Coast. He holds membership in various professional bodies, including the Institute of Chartered Accountants (Ghana and Nigeria), Chartered Institute of Taxation (Ghana), and the National Association of Certified Valuators and Analysts. He has enriched his leadership acumen through programs at prestigious institutions like Harvard Business School, INSEAD, EY's Next Generation leadership and Management Development Programs. In his leisure time, Samuel enjoys reading, singing, and watching movies.",
  },

  {
    icon: icon_2,
    name: "Mariam Yahaya-Shiru Ph.D",
    post: "Chief Executive Officer & Director",

    bio: "Mariam provides strategic direction and vision to the company. Collaborating closely with the Board of Directors and senior management teams, she plays a pivotal role in establishing, implementing, and overseeing corporate goals, strategies, plans, and policies. Mariam's adept leadership ensures alignment with Aerthmetal's overarching objectives, guiding the company towards sustained growth and success. With a diverse background encompassing administration, environmental science, and geology, Mariam brings a wealth of expertise to her leadership role. Her extensive experience spans both the public and private sectors, including noteworthy positions at the Nigeria Oil & Spill Regulatory Agency (NOSDRA) and Ernst & Young (West Africa). These experiences have honed her ability to drive the overall performance of Aerthmetal with finesse and proficiency. She holds a BSc in Geology from the University of Ghana, Legon, Ghana, an MSc in Petroleum Geoscience from the University of Manchester, UK, and a PhD from the University of Nigeria, Nsukka, Nigeria. This academic background equips Mariam with the knowledge and skills necessary to navigate the complexities of the mining and exploration industry effectively. Beyond her professional pursuits, Mariam finds joy in traveling, reading, and spending quality time with her family. These pursuits not only rejuvenate her spirit but also contribute to her well-rounded perspective as a leader. Mariam's dedication to personal growth and balance underscores her commitment to leading Aerthmetal with passion, integrity, and excellence.",
  },

  {
    icon: icon_3,
    name: "Raphael Kwame Adjah",
    post: "Chief Operations Officer ",
    bio: "Mr. Raphael Kwame Adjah is a highly experienced Mining Engineer with a 33-year career, overseeing numerous mining projects and operations for major gold mining companies across Africa, including AngloGold Ashanti Iduapriem Mine and Africa Mining Services. His journey began in 1996 upon completing a Mining Engineering program at the University of Mines and Technology, where he startedas a junior mining engineer at Teberebie Goldfields for 3.5 years. After the closure of the company in 1999 due to low gold prices, he transitioned to African Mining Services, progressing from a mining engineer to a shift supervisor and eventually a mining superintendent. In 2000, Mr. Adjah joined Goldfields, playing a pivotal role in the company's shift from contract mining to owner mining as a production manager. Later, he joined AngloGold Ashanti as a senior mining manager, overseeing multi-million-dollar projects and investments until the end of 2023. Mr. Adjah is renowned for achieving company targets while prioritizing safety and cultivating competent technical teams that have transformed mines like Goldfields Ghana Tarkwa mine and AngloGold Ashanti Iduapriem mine into highly successful and profitable ventures. Mr. Adjah is dedicated to rewarding team members through performance management processes. Mr. Adjah holds a professional Mining Engineering degree from the University of Mines and Technology Tarkwa, with additional studies at GIMPA and the University of Stellenbosch Business School. He has contributed significantly to the industry, serving as the head/chairman for the Technical committee of the Minerals Commission in 2023",
  },
  {
    icon: icon_4,
    name: "Emmanuel Mc-Coffie Ankamah",
    post: "Chief Financial Officer",
    bio: "Mr. Emmanuel Mc-Coffie Ankamah has over 33 years of extensive experience in Finance and Business Management, specializing in Corporate Financing, Treasury Management, Business Strategy, Commercial and Stakeholder Management within the Mining and Oil & Gas Industry. As a fellow of the Institute of Chartered Accountants - Ghana and the Chartered Institute of Taxation of Ghana, Mr. Ankamah has a proven track record of success. Mr. Ankamah has transformed several non-profitable mining companies into highly profitable and operationally efficient entities across Africa, including Tanzania. His career journey began in 1988 as a management accountant at the Ghana Co-operative Bank Limited, before joining the Ghana National Petroleum Corporation (GNPC) as an internal auditor, where he rapidly ascended to the role of Principal Internal Auditor & Principal Accountant within 6 years. At GNPC, he implemented various initiatives that enhanced process improvement and operational efficiencies before transitioning to AngloGold Ashanti, formerly known as Ashanti Gold.At AngloGold Ashanti, Mr. Ankamah held various key positions, including CFO, Finance Manager, Head of Treasury, Finance and Marketing & Business Development, and served as CEO of several subsidiaries outside Ghana. He has held strategic positions such as Past Board Member of AngloGold Ashanti – Geita Gold Mining Limited, Tanzania, ICAG Nominee Board Member – Audit Committee – WASSA Amenfi Central District Assembly, and Chairperson of various committees within the Institute of Chartered Accountants - Ghana (ICAG).",
  },
  {
    icon: icon_5,
    name: "Isa Maulud Tafida Ph.D",
    post: "Chief Sustainability Officer",
    bio: "Isa assumes the pivotal role of driving Environmental, Social & Governance (ESG) compliance initiatives as the Chief Sustainability Officer. With over a decade of experience as a chartered environmentalist and physical climate change risk expert, he brings unparalleled expertise in scoping, planning, and ensuring compliance within the company. Isa's focus within the sustainability department revolves around assessing the company's environmental impacts, resources, and plans to enhance sustainable practices. He has served as a climate risk expert and change leader at esteemed organizations such as the World Economic Forum (WEF), United Nations (UN), KPMG (UK), and SKY Media Group (UK). Moreover, Isa has contributed significantly as an adjunct researcher and consultant at the University of Liverpool and the Grow Africa Initiative. He spearheads the climate risk and decarbonization strategy and engagements on a day-to-day basis. Isa holds a BSc in Environmental Science from the University of East Anglia, UK, an MSc in Climate Change and International Development from the same institution, a PGCert in Environmental Risk Management from the University of Cranfield, UK, and a PhD from the University of Liverpool, UK. Beyond his professional endeavors, Isa is an avid fitness enthusiast, traveler, and boxing fan.",
  },
  {
    icon: icon_6,
    name: "Benedict Kwame Bambil",
    post: "Chief Technical Officer",
    bio: "Benedict is a Ghanaian Senior Consulting Geologist, holding both an MSc. in Geology and a BSc. in Geological Engineering, with a over seventeen years of experience in mineral exploration and development across various commodities including gold, iron ore, lithium, feldspar, kaolin, and chromite. His extensive career has taken him to so many places where he has collaborated with major mining companies such as Newmont Ghana, Coffey Mining, Torkonoo & Associates, Miniright, Independent Geologist, and Afrobullion Mine Limited, serving in roles such as Operations Manager. Benedict's expertise spans the gold mining value chain, encompassing activities such as acquisition of mineral rights, mineral property brokerage, report writing, feasibility studies, environmental impact assessments, business planning, and execution of exploration programs. He has led projects in Greenfields to Brownfields exploration, resource drilling, logging of RAB, RC chips, and diamond drill cores, as well as geotechnical and structural assessments. He has been involved in trench mapping in iron ore (Fe & Au) deposits and excels in database management, planning, and executing exploration activities. Benedict is a proud member of the Ghana Institute of Geoscientists (GhIG) and enjoys enriching his knowledge through reading and listening to Christian teachings. In his leisure time, he indulges in his favorite game, Scrabble.",
  },
];

const Team = () => {
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
      if (position === cards.length - 4) setCanMoveRight(false);
    }
  };
  const [flippedStates, setFlippedStates] = useState(
    new Array(cards.length).fill(false)
  );

  const handleFlipped = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  return (
    <>
      <section className="max-container mb-96">
        <div
          className="w-full h-[400px] bg-team-bg max-container relative"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button className="bg-[#012352] text-white px-8 py-2 rounded-full ">
              Team
            </button>
            <h1 className="text-5xl mt-3 text-white font-medium">
              Meet The Team
            </h1>
          </div>
        </div>
        <div
          className="padding mt-10"
          data-aos="zoom-in-right"
          data-aos-duration="900"
        >
          <h1 className="font-semibold text-[#002353] text-3xl mb-5">
            Passionate Expert Driving Our <br /> Success
          </h1>
          <h1 className="font-medium w-[90%]">
            Our people are our greatest asset, and we're proud to have a diverse
            and talented group of individuals who share a passion for
            responsible mining and sustainable development.
          </h1>
        </div>
        <div
          className="w-screen h-fit flex flex-col padding bg-white relative "
          data-aos="zoom-in-left"
          data-aos-duration="900"
        >
          <div className="w-full overflow-x-hidden">
            <div
              className="flex py-5 transition-transform duration-700 gap-2"
              style={{ transform: `translateX(-${position * 30}%)` }}
            >
              {cards.map((card, index) => (
                <div className="w-[30%] flex-shrink-0" key={index}>
                  {flippedStates[index] ? (
                    <div
                      className="rounded-lg w-[350px] h-[550px] bg-[#8D071D] text-white text-xs p-3 transition ease-in-out duration-300 transform hover:scale-105 text-center"
                      onClick={() => handleFlipped(index)}
                    >
                      <h1>{card.bio}</h1>
                    </div>
                  ) : (
                    <div className="rounded-lg w-fit h-[550px] bg-[rgba(0,35,83,0.3)]">
                      <div className="bg-[rgb(0,35,83)] w-[350px] h-[350px] rounded-br-3xl rounded-tl-md rounded-tr-md rounded-bl-3xl pt-3">
                        <img
                          src={card.icon}
                          alt="person1"
                          className="h-[99.9%] w-full rounded-3xl "
                        />
                      </div>
                      <div className="mt-8 text-center ">
                        <h1 className="font-semibold text-black text-lg">
                          {card.name}
                        </h1>
                        <h1 className=" text-black text-lg ">{card.post}</h1>
                      </div>
                      <div className="items-center flex w-full justify-center mt-7 ">
                        <button
                          className="bg-[#002353] px-10 rounded-lg text-white py-2 "
                          onClick={() => handleFlipped(index)}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                  )}
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
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden relative mt-3">
              <div
                className="h-full bg-blue-500 absolute"
                style={{
                  width: "25%",
                  left: `${position * 25}%`,
                  transition: "left 0.3s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="padding mt-24"
          data-aos="zoom-in-right"
          data-aos-duration="900"
        >
          <h1 className="text-[#002353] font-semibold text-2xl">
            What do our team have in <br />
            common?
          </h1>
          <div className="grid grid-cols-4 mt-10">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={grad1} />
                </div>
                <div className="flip-card-back">
                  <img src={back} className="" />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={grad2} />
                </div>
                <div className="flip-card-back">
                  <img src={back} className="" />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={grad3} />
                </div>
                <div className="flip-card-back">
                  <img src={back} className="" />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={grad4} />
                </div>
                <div className="flip-card-back">
                  <img src={back} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;

import human_icon from '../assets/icons/human_icon.svg';
import recycle_icon from '../assets/icons/recycle_icon.svg';
import scales_icon from '../assets/icons/scales_icon.svg';

import arrow_left from '../assets/icons/arrow_left.svg';
import arrow_right from '../assets/icons/arrow_right.svg';

import CoreValueCard from './CoreValueCard';
import { useState } from 'react';


const cards = [

    {
        icon: human_icon,
        title: "Excellence",
        body: "Striving for excellence in every aspect of our operations."
    },

    {
        icon: recycle_icon,
        title: "Sustainability",
        body: "Committed to practices harmonizing with environmental and social well-being."
    },

    {
        icon: scales_icon,
        title: "Integrity",
        body: "Conducting ourselves with unwavering integrity, earning trust through ethical practices."
    },

]

const CoreValueSlider = () => {

    const [position, setPosition] = useState(0); // Initial position of the slider
  const [canMoveLeft, setCanMoveLeft] = useState(false); // State to track if left button can be clicked
  const [canMoveRight, setCanMoveRight] = useState(true); // State to track if right button can be clicked

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
    
    <div className=" h-[350px] flex flex-col relative" data-aos = "fade-in" data-aos-duration = "850">
                    <div className="w-full overflow-x-hidden">
                                <div
                                    className="flex gap-8 px-1 py-5 transition-transform duration-700 "
                                    style={{ transform: `translateX(-${position * 25}%)` }}>

                                    {cards.map((card, index) => (
                                    <div className="w-2/5 flex-shrink-0" key={index}>
                                        <CoreValueCard
                                        key={index}
                                        icon={card.icon}
                                        title={card.title}
                                        body={card.body}
                                        />
                                    </div>
                                    ))}

                                </div>
                    </div>

    <div className="flex flex-col bottom-4">
    
            <div className="mt-3 flex justify-end gap-8">
                <button
                onClick={() => moveSlider("left")}
                disabled={!canMoveLeft}>
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
                disabled={!canMoveRight}>
                <img
                    src={arrow_right}
                    height={45}
                    width={45}
                    className="bg-white p-3 rounded-full drop-shadow-lg"
                    alt="Right Arrow"
                />
                </button>
            </div>
            
                    {/* <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden relative mt-3">
                    
                        <div
                        className="h-full bg-blue-500 absolute"
                        style={{
                            width: "33%",
                            left: `${position * 33}%`,
                            transition: "left 0.3s ease-in-out",}}
                        ></div>

                    </div> */}
    </div>

  </div>
  )
}

export default CoreValueSlider
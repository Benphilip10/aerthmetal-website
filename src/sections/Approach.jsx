
// import Slider from '../components';

import ApproachCard from '../components/ApproachCard';

import icon_1 from '../assets/icons/challenge_icon.svg';

import icon_2 from '../assets/icons/approach_icon.svg';

import icon_3 from '../assets/icons/risk_icon.svg';

import arrow_left from '../assets/icons/arrow_left.svg';

import arrow_right from '../assets/icons/arrow_right.svg';

import { useState} from 'react';


const cards = [

    {
        icon: icon_1,
        title: "Addressing Challenges",
        body: "Aerthmetal was established to tackle mining investment challenges head-on. We strategically identify high-potential assets in their earliest stages, often with minimal exploration. we provide the  initial capital investment and technical support crucial for completing bankable feasibility studies."
    },

    {
        icon: icon_2,
        title: "Unlocking Full Potential",
        body: "Aerthmetal aims to unlock the full potential of undervalued and underdeveloped mining assets in Nigeria, contributing to the sustainable growth of the sector. Catalyze large-scale mining projects in Nigeria creating socio-economic development and improving the lives."
    },

    {
        icon: icon_3,
        title: "Mitigating Risks",
        body: "Recognizing the inherent risks in mineral exploration and development, we commit to strategic business decisions and a focus on viable exploration targets. Environmental and community consideration are at the forefront of our operations to ensure responsible and sustainable practices."
    },

]
  

const Approach = () => {

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
}

    return (

    <div className="py-20 h-[700px]">

        <div className="flex justify-between items-center px-20" data-aos = "fade-down" data-aos-duration = "1000">

            <div className="flex flex-col mb-1">
                <h1 className="font-bold text-[32px] text-primary-blue w-[500px] mt-12">
                Our Approach
                </h1>

                <p className="w-[700px] mt-5 text-[17px] leading-[30px]">
                At Aerthmetal, we believe that responsible and sustainable practices are essential to our success and the well-being of our stakeholders.
                </p>
            </div>

        </div>

        
        <div className=" w-screen h-[600px] flex flex-col padding bg-white">

            <div className="w-full overflow-x-hidden">
                <div className="flex gap-8 px-1 py-5 transition-transform duration-700" style={{ transform: `translateX(-${position * 25}%)` }}>
                        {cards.map((card, index) => (
                            <div className="w-2/5 flex-shrink-0" key={index}>
                            <ApproachCard
                                key ={index}
                                iconImg = {card.icon}
                                title = {card.title}
                                body = {card.body}
                            />
                            </div>
                        ))} 
                </div>
            </div>        
    

                <div className='flex flex-row gap-10 justify-between items-center'>        
                <div className='mt-3 flex gap-8'>
                    <button
                        onClick={() => moveSlider('left')}  
                        disabled={!canMoveLeft}
                    >
                    <img
                        src={arrow_left}
                        height={45} width={45}
                        className="bg-white p-3 rounded-full drop-shadow-lg"
                    />
                    </button>


                    <button
                      onClick={() => moveSlider('right')}  
                      disabled={!canMoveRight}
                    >
                    <img
                        src={arrow_right}
                        height={45} width={45}
                        className="bg-white p-3 rounded-full drop-shadow-lg"
                    />
                    </button>
                </div>
                <div className="w-[50%] h-2 bg-gray-300 rounded-full overflow-hidden relative mt-3">
                    
                        <div
                        className="h-full bg-primary-blue absolute"
                        style={{
                            width: "50%",
                            left: `${position * 50}%`,
                            transition: "left 0.3s ease-in-out",}}
                        ></div>

                    </div>

                    
                </div>
                    

        </div>
    </div>


        
    



         
        

  )
}

export default Approach
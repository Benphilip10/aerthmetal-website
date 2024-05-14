import { useState } from 'react';
import ApproachCard from './ApproachCard';
import PropTypes from 'prop-types'; // Import PropTypes

const Slider = ({ cards }) => {

    Slider.propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
          // Define the shape of each card object
          iconImg: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        })).isRequired, // cards prop is required
      };

  const [position, setPosition] = useState(0); // Initial position of the slider
  const totalCards = cards.length;

  const moveSlider = (direction) => {
    const newPosition = direction === 'left' ? position - 1 : position + 1;
    setPosition(newPosition);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="relative w-4/5 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${position * 100}%)` }}>
          {cards.map((card, index) => (
            <div className="w-full flex-shrink-0" key={index}>

            <ApproachCard {...card}/>

            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
        <div className="h-2 bg-blue-500" style={{ width: `${(position / (totalCards - 1)) * 100}%` }}></div>
      </div>
      <button className="absolute left-0 transform -translate-y-1/2 -translate-x-full top-1/2 px-4 py-2 bg-blue-500 text-white rounded-l-lg" onClick={() => moveSlider('left')}>Previous</button>
      <button className="absolute right-0 transform -translate-y-1/2 translate-x-full top-1/2 px-4 py-2 bg-blue-500 text-white rounded-r-lg" onClick={() => moveSlider('right')}>Next</button>
    </div>
  );
};
  
export default Slider;

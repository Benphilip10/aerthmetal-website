import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
    
const TeamCard = (props) => {

    TeamCard.propTypes = {
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, //This line for prop validation
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
      };

  return (
    <div className="w-[400px] bg-white min-h-[580px] shadow-3xl border-[#d1d1d1] rounded-md" data-aos="flip-right" data-aos-duration="1500">
        <div className="p-2 mt-1">
            <img className="rounded-lg" 
            src={props.image}
            height={100}
            width={380}
            />
        </div>

        <div className="p-4 pb-4 text-center">

            <h1 className="text-[20px] font-bold mb-1">{props.name}</h1>

            <p className="font-normal mb-4 text-[18px]">{props.title}</p>

            <p className="font-light leading-6 mb-4 text-[15px]">{props.info} 
            <NavLink to="/team"><span className="text-primary-blue font-semibold text-[13px]" onClick>"Read More"</span></NavLink>
            </p>
        </div> 
    </div>
  )
}

export default TeamCard
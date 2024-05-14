
import PropTypes from "prop-types";

const ServicesCard = (props) => {

    ServicesCard.propTypes = {
        image: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired, //This line for prop validation
        body1: PropTypes.string.isRequired,
        body2: PropTypes.string.isRequired,
      };

  return (
    <div className="w-[450px] bg-white h-[460px] border border-[#d1d1d1] rounded-md" data-aos="zoom-in-left" data-aos-duration="2000">
        <div className="p-4 mt-2">
            <img className="rounded-lg" 
            src={props.image}
            />
        </div>

        <div className="p-4 pb-3">
            <h1 className="text-[18px] font-bold mb-4">{props.heading}</h1>
            <p className="font-light leading-6 mb-4 text-[16px]">{props.body1}</p>
            <p className="font-light leading-6 text-[16px]">{props.body2}</p>

        </div>
    </div>
  )
}

export default ServicesCard
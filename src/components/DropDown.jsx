import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DropDown = (closeDropdown) => {

    DropDown.propTypes = {
        dropdown: PropTypes.bool.isRequired,
        setDropdown: PropTypes.func.isRequired,
        closeDropdown: PropTypes.func.isRequired
    };

    
  return (
    <div className="absolute w-[190px] shadow-md h-100 bg-white p-4 rounded-xl top-[70px] right-[580px] scale-in-top"
    >
        <div className="flex flex-col justify-start">
        <Link to='/about-us'><p className="hover:bg-[#D9DEE5] p-2 rounded-md transition-all 
              duration-100 ease-in" onClick={closeDropdown}>Who we are</p></Link>

       <Link to='/assets'> <p className="p-2 hover:bg-[#D9DEE5] rounded-md transition-all 
              duration-100 ease-in" onClick={closeDropdown}>Our Assets</p></Link>

       <Link to='/contract'><p className="hover:bg-[#D9DEE5] p-2 rounded-md transition-all 
              duration-100 ease-in" onClick={closeDropdown}>Contract</p></Link>
        </div>

    </div>
  )
}

export default DropDown
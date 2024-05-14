import ServicesCard from "../components/ServicesCard";

import service_img1 from '../assets/images/service_img1.png';
import service_img2 from '../assets/images/service_img2.png';
import service_img4 from '../assets/images/service_img4.png';
import { NavLink } from "react-router-dom";

const Services = () => {


  return (
    <div className="padding h-full bg-white bg-curves-bg bg-no-repeat">

        <div className="flex justify-between items-start mt-20" data-aos = "zoom-in" data-aos-duration = "1000">

          <div className="flex flex-col" >
              <h1 className="font-bold text-[32px] text-primary-blue w-[400px] mt-12">
                 Mineral Exploration Services by Aerthmetal
              </h1>
              <p className="w-[700px] mt-5 text-[17px] leading-[30px]">
              At Aerthmetal, we specialize in providing top-tier mining exploration services, leveraging our technical teams' expertise, cutting-edge technology, and a commitment to excellence. Our comprehensive suite of services covers the entire spectrum of mining exploration, from initial prospecting to resource evaluation.

              </p>
          </div>

            <div className="flex mt-12">
              <NavLink to='/services-page'><button type='button' className= "py-2 px-10 rounded-md text-white bg-primary-blue hover:scale-105 transition-all duration-300 ease-in hover:bg-[#D9DEE5] hover:text-primary-blue" onClick>
                  VIEW ALL
              </button> </NavLink>
            </div>
        </div>
    
        <div className=" mt-12 flex gap-6 mb-12">
            <ServicesCard
              image = {service_img1}
              heading = "Geological Survey"
              body1 = "1. Conducting detailed geological surveys to identify potential mining sites."
              body2 = "2. Analyzing geological formations and structures to determine mineralization prospects"             
              />

            <ServicesCard
              image = {service_img2}
              heading = "Remote Sensing & satellite imaging"
              body1 = "1. Utilizing state-of-the-art remote sensing technologies and satellite imaging for preliminary assessments."
              body2 = "2. Mapping and interpreting surface features to identify anomalies and potential deposit sites."
            />

          <ServicesCard
              image = {service_img4}
              heading = "Drilling Programs"
              body1 = "1. Planning and executing drilling programs to extract core samples from identified target areas."
              body2 ="2. Conducting diamond drilling, reverse circulation drilling, and other specialized drilling techniques."
            />

        </div>
    
    </div>
  )
}

export default Services
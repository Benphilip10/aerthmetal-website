import { NavLink } from "react-router-dom"

const JobSection = () => {

  return (
    
    <div className="flex h-[600px] bg-[url('/src/assets/images/workjob_img.png')] relative mb-10" data-aos-duration="300">

            {/* Overlay bg */}
        <div className="padding bg-gray-900 w-full h-[600px] mb-10 opacity-80"></div>
            
        <div className="flex flex-col absolute top-[200px] px-[300px]">

            <div className="flex flex-col">
                    <h1 className="font-light text-[24px] text-white text-center mb-1">Grow with us</h1>
                    <h1 className="font-semibold text-[32px] text-white text-center w-full">Explore Exciting Career Opportunities</h1>
                    <p className="text-white font-light text-center mt-2">Whether you're just starting your career or looking to take your skills to the next level, we offer a range of exciting opportunities to help you grow and succeed.</p>
            </div>
                
                <div className="mt-8 text-center">
              <NavLink to='/careers'><button className= "bg-primary-blue py-3 px-10 rounded-md text-white hover:scale-105 transition-all duration-300 ease-in hover:bg-[#D9DEE5] hover:text-primary-blue" onClick>
                  Job Opportunities
              </button>
              </NavLink>
              </div>
        </div>

    </div>
  )
}

export default JobSection
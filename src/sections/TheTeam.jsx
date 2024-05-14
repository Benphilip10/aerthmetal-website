import TeamCard from "../components/TeamCard";

import team_img1 from '../assets/images/team_img1.png';
import team_img2 from '../assets/images/team_img2.png';
import team_img3 from '../assets/images/team_img3.png';
import { NavLink } from "react-router-dom";

const teamData = [

    {
        image: team_img1,
        name: "Sam Agbevem",
        title: "President & Board Chair",
        info: "Samuel is a seasoned business analyst and strategist with a track record of guiding both established and startup ventures across Africa towards successful transformation. His leadership has resulted in the development of resilient organizations known for generating lasting..."

    },

    {
        image: team_img2,
        name: "Mariam Yahaya-Shiru Ph.D",
        title: "Chief Executive Officer & Director",
        info: "Mariam provides strategic direction and vision to the company. Collaborating closely with the Board of Directors and senior management teams, she plays a pivotal role in establishing, implementing, and overseeing corporate goals, strategies, plans..."

    },

    {
        image: team_img3,
        name: "Raphael Kwame Adjah",
        title: "Chief Operations Officer",
        info: "Mr. Raphael Kwame Adjah is a highly experienced Mining Engineer with a distinguished 33-year career, overseeing numerous mining projects and operations for major gold mining companies across Africa....."

    },



]


const TheTeam = () => {
  return (

<div className="padding h-full mb-2">

        <div className="flex justify-between items-center" data-aos = "zoom-in" data-aos-duration = "1000">

        <div className="flex flex-col">
            <h1 className="font-bold text-[32px] text-primary-blue w-[500px] mt-12">
            Meet The Team: Passionate Expert Driving Our Success
            </h1>
        </div>

        <div className="flex items-start">
            <NavLink to='/team'>
            <button className= "py-2 px-10 rounded-md text-white bg-primary-blue hover:scale-105 transition-all duration-300 ease-in hover:bg-[#D9DEE5] hover:text-primary-blue" onClick>
                VIEW ALL
            </button>
            </NavLink>
        </div>
    </div>

        <div className="mt-12 flex justify-between gap-8">
        {
            teamData.map((item, index) => (
                
                <TeamCard
                    key ={index}
                    image = {item.image}
                    name = {item.name}
                    title = {item.title}
                    info =  {item.info}
                />
            ))
        }


        </div>

    </div>
  )
}

export default TheTeam
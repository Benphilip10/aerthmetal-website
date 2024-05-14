import { NavLink } from "react-router-dom"

const Heros = () => {

  return (
    <div className="w-full h-[650px] bg-hero-image padding max-container">

        <div className="pt-[150px]" >
            <h1 className="text-white font-bold text-[60px] w-[200px] leading-[68px]" data-aos ="fade-right" data-aos-duration="900">
            Unlocking Opportunities
            </h1>
            <p className="w-[650px] text-white mt-6 mb-8 text-[18px]" data-aos ="fade-up" data-aos-duration="1200">Aerthmetal unlocks the full potential of undervalued  mining assets in Nigeria for the sustainable growth of the sector.</p>

            <NavLink to='/about-us'>
            <button type="button" className="py-3 px-5 font-semibold rounded-md text-primary-blue bg-white hover:drop-shadow-lg hover:text-primary-blue hover:scale-110 hover:bg-[#D9DEE5] transition-all duration-300 ease-in" data-aos ="fade-up" data-aos-duration="900" data-aos-once="true" onClick>
                DISCOVER MORE
            </button>
            </NavLink>
        </div>

    </div>

  )
}

export default Heros
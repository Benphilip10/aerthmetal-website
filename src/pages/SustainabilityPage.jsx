import sustainability_hero_img from '../assets/images/sustainability_hero_img.png';
import sustainability_img1 from '../assets/images/sustainability_img1.png';
import sustainability_img2 from '../assets/images/sustainability_img2.png';
import sustainability_img3 from '../assets/images/sustainability_img3.png';
import { Footer } from '../sections';

const SustainabilityPage = () => {
  return (
    <div>
          <div className='relative' data-aos="fade-in" data-aos-duration="400">
              <img
            src={sustainability_hero_img}/>
            <p className='absolute bottom-[75px] left-20 px-8 py-2 rounded-full text-[14px] text-white bg-primary-blue'>Sustainability</p>

            <h1 className='absolute bottom-[12px] left-20 text-[45px] font-medium text-white'>
            Environmental, Social & Governance</h1>
        </div>
    
          <div className='bg-[#E6E9EE]' data-aos='fade-down' data-aos-duration='800'>
              <div className=" h-[300px] padding">
                <div>
                    <h1 className='text-[32px] font-bold text-primary-blue mt-10'>Sustainability</h1>

                    <p className='w-[1000px] text-[16px] mt-1 leading-10'>We are committed to ensuring that all our stakeholders share in our success. To achieve this, we will prioritize environmental, social, and governance (ESG) excellence, aligning our business goals with societal needs. This integration is crucial to our long-term prosperity and the well-being of our business, as well as the world around us</p>
                </div>
              </div>
          </div>

          {/* 1st Section */}
          <div className='mt-10'> 
              <div className=' h-full padding flex gap-5 items-center'>
                <div data-aos='fade-right' data-aos-duration='900'>
                    <h1 className='text-[32px] font-bold text-primary-blue mt-10'>Our Culture of Sustainability</h1>

                    <p className='w-[700px] text-[16px] mt-1 leading-10'>Aerthmetal acknowledges the impact of climate change on mining projects and is dedicated to integrating operational improvements aligned with a low carbon transition. Our commitment to ESG principles guides us in evaluating environmental risks and implementing modern, responsible solutions.</p>
                </div>

                <div data-aos='fade-left' data-aos-duration='900'><img src={sustainability_img1}/></div>
              </div>
          </div>


          {/* 2nd Section */}
          <div className='h-full mt-10 bg-no-repeat bg-long-grey-curve relative'> 
              <div className="h-[700px] padding flex flex-row-reverse gap-20 justify-between items-center">
                <div data-aos='fade-up' data-aos-duration='900'>
                    <h1 className='text-[32px] font-bold text-primary-blue mt-10'>Our Culture of Community</h1>

                    <p className='w-[650px] text-[16px] mt-1 leading-10'>Engaging in responsible corporate social behavior creates greater value for stakeholders and fosters trust among employees and host communities. Our commitment is reflected in targeted corporate community partnership initiatives, delivering substantial economic opportunities and contributing to social development in the areas where we operate.</p>
                </div>

                <div data-aos='fade-left' data-aos-duration='900'><img src={sustainability_img2}/></div>
              </div>
          </div>


          {/* 3rd Section */}
          <div className='h-full mt-10 bg-no-repeat bg-long-red-curve relative'> 
              <div className="h-[700px] padding flex flex-row gap-20 justify-between items-center">
                <div data-aos='fade-up' data-aos-duration='900'>
                    <h1 className='text-[32px] font-bold text-primary-blue mt-10'>
                    Our Culture of Responsibility
                    </h1>

                    <p className='w-[650px] text-[16px] mt-1 leading-10'>As a private company, we prioritize ethical corporate governance. We implement robust systems to address legal compliance, ethics, transparency, and anti-bribery and corruption. We highly value our investors and commit to the use of accurate and transparent accounting methods. We emphasize integrity in leadership selection and remain accountable to our shareholders.</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='900'><img src={sustainability_img3}/></div>
              </div>
          </div>

          <Footer/>
    </div>
  )
}

export default SustainabilityPage
import about_hero_img from '../assets/images/about_hero_img.png';
import milestone_card from '../assets/images/milestone_card.svg';
import h1_arrow from '../assets/icons/h1_arrow.svg';

import { CoreValueSlider } from '../components';
import { Footer } from '../sections';


const AboutUs = () => {

  return (
    <div>
                {/* Hero Section */}
              <div className='relative' data-aos="fade-in" data-aos-duration="800">
                <img
                    src={about_hero_img}/>
                    <p className='absolute bottom-[75px] left-20 px-8 py-2 rounded-full text-[14px] text-white bg-primary-blue'>About</p>

                    <h1 className='absolute bottom-[12px] left-20 text-[45px] font-medium text-white'>
                    Aerthmetal: Unlocking Opportunities</h1>
                </div>

                {/* 2nd Section */}
                <div className='bg-card-pattern h-full' data-aos = "fade-in" data-aos-duration = "700">

                      <div className='padding flex gap-20 items-center'>
                          
                          <div className='mt-4 mb-20' data-aos = "fade-right" data-aos-duration = "1000">

                            <h1 className='font-bold text-[32px] my-4 text-primary-blue'>The Company</h1>

                            <p className='w-[700px] text-[20px] leading-[30px] text-[#505660] mb-5'>Founded in 2017, Aerthmetal is a modern mining and exploration company focusing on identifying, defining, and developing undervalued mining assets for commercial-scale production in Nigeria.</p>

                            <p className='w-[700px] text-[20px] leading-[30px] text-[#505660]'>Aerthmetal team comprises seasoned geologists, mining engineers, and exploration professionals with a proven track record in successful mining projects.</p>

                          </div>

                          <div className=' h-full mt-14 mb-20' data-aos = "fade-left" data-aos-duration = "1000">
                            <img
                              src={milestone_card}
                              className='w-[600px] h-[400px]'
                            />
                          </div>
                          
                      </div>

                  </div>    

                  {/* 3rd section with Slider */}

                  <div className="padding flex flex-col h-full bg-[url('/src/assets/images/about_img1.png')] mb-10" data-aos-duration='600' data-aos='fade-in'>
                
                  <div className="flex flex-col items-center">
                        <h1 className="font-semibold text-[35px] mb-10 mt-20 text-white w-[800px]" data-aos = "fade-down" data-aos-duration = "1000">Bringing Essential Minerals to the Surface</h1> 

                      <div className='flex justify-between gap-8 mt-10'>
                        
                              <div>
                              <div className='flex items-center gap-3 mb-3' data-aos = "fade-right" data-aos-duration = "700">
                                <img src={h1_arrow} className='w-[30px] h-[30px]'/>
                                <h1 className='text-white font-semibold text-[18px]'>Our Mission</h1>
                              </div>

                              <p className='text-white font-light w-[580px] text-[18px]' data-aos = "fade-right" data-aos-duration = "850">To create enduring value for our investors and foster positive, sustainable development within our host communities.</p>
                              </div>

                              <div>
                              <div className='flex items-center gap-3 mb-3' data-aos = "fade-left" data-aos-duration = "700">
                                <img src={h1_arrow} className='w-[30px] h-[30px]'/>
                                <h1 className='text-white font-semibold text-[18px]'>Our Vision</h1>
                              </div>

                              <p className='text-white font-light w-[580px] text-[18px]' data-aos = "fade-left" data-aos-duration = "850">To create enduring value for our investors and foster positive, sustainable development within our host communities.</p>
                              </div>

                      </div>       
                  </div>
                            <div className='mt-10'>

                                <div className='mb-8' data-aos = "fade-up" data-aos-duration = "850">
                                <div>
                                <h1 className="font-semibold text-[35px] mb-3 mt-20 text-white w-[700px]">Our Core Values</h1> 
                                </div>

                                <p className='text-white font-light w-[1000px] text-[18px]'>At Aerthmetal, we live by a set of core values that guide our actions, decisions, and behaviors. These values are the foundation of our culture and shape who we are, how we work, and the impact we make.</p>
                                </div>

                                <CoreValueSlider/>
                              
                            </div>


                </div>

                    {/* 4th Section */}

                      <div className='padding'>
                              <div className='mb-4' data-aos='fade-in' data-aos-duration='900'>
                                <div>
                                <h1 className="font-semibold text-[40px] mb-3 mt-10 text-primary-blue w-[700px]">Our Culture</h1> 
                                </div>

                                <p className='font-light w-[900px] text-[18px]'>We believe that responsible mining practices and a strong culture go hand in hand. Our culture is built on a foundation of safety, sustainability, and community engagement. </p>
                              </div>

                              <div className='flex gap-20 justify-between' data-aos='fade-up' data-aos-duration='900'>

                                  <div className='w-[500px]'>
                                    <div>
                                  <h1 className="font-bold text-[30px] mb-2 mt-10 text-primary-blue w-[500px]">Long-Term Impact</h1> 
                                  </div>

                                  <p className='font-light w-[500px] text-[18px]'>Aerthmetal's commitment to long-term impact drives us to make decisions that positively influence our employees, host communities, and the planet. </p>
                                  </div>

                                  <div className='w-[500px]'>
                                    <div>
                                  <h1 className="font-bold text-[30px] mb-2 mt-10 text-primary-blue w-[500px]">Sustainable Outcomes</h1> 
                                  </div>

                                  <p className='font-light w-[430px] text-[18px]'>We value sustainable outcomes, ensuring that our projects contribute to environmental resilience and social development. </p>
                                  </div>

                              </div>

                              <div className='flex gap-20 justify-between' data-aos='fade-up' data-aos-duration='900'>

                                  <div className='w-[500px]'>
                                    <div>
                                  <h1 className="font-bold text-[30px] mb-2 mt-10 text-primary-blue w-[500px]">ESG Integration</h1> 
                                  </div>

                                  <p className='font-light w-[500px] text-[18px]'>Our adherence to ESG principles ensures that we consider environmental, social, and governance factors in all aspects of our operations. </p>
                                  </div>

                                  <div className='w-[500px]'>
                                    <div>
                                  <h1 className="font-bold text-[30px] mb-2 mt-10 text-primary-blue w-[500px]">Ethical Governance</h1> 
                                  </div>

                                  <p className='font-light w-[450px] text-[18px]'>As a responsible corporate citizen, we prioritize ethical governance, transparency, and accountability in all our activities. </p>
                                  </div>

                              </div>
                      </div>

                      <Footer/>
      
                  
    
    </div>
  )
}

export default AboutUs
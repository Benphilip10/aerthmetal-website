import lithium_hero_img from '../assets/images/lithium_hero_img.png';
import lithium_img1 from '../assets/images/lithium_img1.png';

import lithium_use1 from '../assets/images/lithium_use1.png';
import lithium_use2 from '../assets/images/lithium_use2.png';
import lithium_use3 from '../assets/images/lithium_use3.png';
import lithium_use4 from '../assets/images/lithium_use4.png';

import { Footer } from '../sections';




const LithiumPage = () => {
  return (

    <div>

        <div className='relative' data-aos="fade-in" data-aos-duration="400">
        <img
            src={lithium_hero_img}/>
            <p className='absolute bottom-[75px] left-20 px-8 py-2 rounded-full text-[14px] text-white bg-primary-blue'>Lithium</p>

            <h1 className='absolute bottom-[12px] left-20 text-[45px] font-medium text-white'>
            Metal That Electrifies</h1>
        </div>

            <div className='padding mt-20'>
                
              <div className='flex gap-10 justify-between' data-aos="zoom-in" data-aos-duration ="1000">  
                <div className='w-[600px] h-[400px]'>
                    <img src={lithium_img1}
                        className='w-full h-full object-cover object-center rounded-[30px]'
                    />
                </div>

                <div>
                    <h1 className='text-[40px] font-semibold text-primary-blue'>The Element of Energy</h1>

                    <p className='w-[600px] text-[18px] mt-2 leading-10'>Lithium is a versatile and highly sought-after element, playing a crucial role in powering our modern world. Its unique properties make it an essential component in the production of lithium-ion batteries, which fuel everything from electric vehicles to smartphones.</p>
                </div>
              </div>

              <div className='mt-40'>
                    <div>
                        <h1 className='text-[40px] font-semibold text-primary-blue'>Uses of Lithium</h1>

                        <p className='w-[600px] text-[18px] mt-2 leading-8'>Lithium is a versatile metal with a wide range of applications across various industries.</p>
                    </div>


                    {/* Uses section */}

                    <div className='mt-10 flex gap-6'>
                        
                        {/* Card 1 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" d data-aos-duration="1000" data-aos="fade-right">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={lithium_use1}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Metallurgy</h1>
                                <p className="font-light leading-6 text-[18px]">Lithium is used to remove impurities from metals like iron, nickel, copper and zinc.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="fade-left" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={lithium_use2}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Organic Synthesis</h1>
                                <p className="font-light leading-6 text-[18px]"> Lithium is used in the production of other organic chemicals, especially pharmaceuticals.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 flex gap-6'>
                            {/* Card 3 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="zoom-in-up" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={lithium_use3}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Lithium-ion Batteries</h1>
                                <p className="font-light leading-6 text-[18px]">Lithium is used in the production of lithium-ion batteries, which are used to power electric vehicles and store renewable energy.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="zoom-in-up" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={lithium_use4}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Aerospace</h1>
                                <p className="font-light leading-6 text-[18px]">Lithium-magnesium alloys and lithium-aluminum alloys are used in the aerospace industry.</p>
                            </div>
                        </div>


                    </div>

              </div>

            </div>

            <Footer/>
    
    </div>
  )
}

export default LithiumPage
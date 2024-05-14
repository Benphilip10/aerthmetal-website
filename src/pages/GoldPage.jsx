import { Footer } from "../sections";

import gold_hero_img from '../assets/images/gold_hero_img.png';
import gold_img1 from '../assets/images/gold_img1.png';

import gold_use1 from '../assets/images/gold_use1.png';
import gold_use2 from '../assets/images/gold_use2.png';
import gold_use3 from '../assets/images/gold_use3.png';
import gold_use4 from '../assets/images/gold_use4.png';

const GoldPage = () => {
  return (
    <div>

        <div className='relative' data-aos="fade-in" data-aos-duration="400">
        <img
            src={gold_hero_img}/>
            <p className='absolute bottom-[75px] left-20 px-8 py-2 rounded-full text-[14px] text-white bg-primary-blue'>Gold</p>

            <h1 className='absolute bottom-[12px] left-20 text-[45px] font-medium text-white'>
            The Luxury Metal of Innovation</h1>
        </div>

            <div className='padding mt-20'>
                
              <div className='flex gap-10 justify-between' data-aos="zoom-in" data-aos-duration ="1000">  
                <div className='w-[600px] h-[400px]'>
                    <img src={gold_img1}
                        className='w-full h-full object-cover object-center rounded-[30px]'
                    />
                </div>

                <div>
                    <h1 className='text-[40px] font-semibold text-primary-blue'>The Precious Metal of  Excellence</h1>

                    <p className='w-[600px] text-[18px] mt-2 leading-10'>Gold is a precious metal that has been cherished for centuries, and its unique properties make it an indispensable resource for both rural and urban communities. From the rural landscapes where gold is often found, to the urban centers where it is crafted into precious items, gold plays a vital role in connecting people and places. </p>
                </div>
              </div>

              <div className='mt-40'>
                    <div>
                        <h1 className='text-[40px] font-semibold text-primary-blue'>Uses of Gold</h1>

                        <p className='w-[750px] text-[18px] mt-2 leading-8'>Gold is a versatile metal with a wide range of applications. Its unique properties, such as its conductivity, durability, and luxurious appeal, make it an essential material in various industries.</p>
                    </div>


                    {/* Uses section */}

                    <div className='mt-10 flex gap-6'>
                        
                        {/* Card 1 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="fade-right" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={gold_use1}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Electronics</h1>
                                <p className="font-light leading-6 text-[18px]">Gold is used to create connectors, switches, and contacts due to its excellent conductivity and resistance to corrosion.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="fade-left" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={gold_use2}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Medical</h1>
                                <p className="font-light leading-6 text-[18px]"> Gold is used in dentistry, surgery, and cancer treatment due to its biocompatibility and ability to conduct heat.</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 flex gap-6">
                        {/* Card 3 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="zoom-in-up" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={gold_use3}
                                />
                            </div>

                            <div className="p-4 mb-4">
                                <h1 className="text-[30px] font-bold mb-2">Aerospace</h1>
                                <p className="font-light leading-6 text-[18px]">Gold is used to coat aircraft components due to its reflective properties and ability to withstand temperature.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-[580px] bg-white max-h-[500px] border border-[#d1d1d1] rounded-md" data-aos="zoom-in-up" data-aos-duration="1000">
                            
                            <div className="p-4 mt-1">
                                <img className="rounded-lg" 
                                src={gold_use4}
                                />
                            </div>

                            <div className="p-4 pb-">
                                <h1 className="text-[30px] font-bold mb-2">Jewelries</h1>
                                <p className="font-light leading-6 text-[18px]"> In jewelry and coins, gold is prized for its luxurious appeal and durability.</p>
                            </div>
                        </div>
                    </div>

              </div>

            </div>

            <Footer/>
    
    </div>
  )
}

export default GoldPage
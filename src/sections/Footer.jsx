import { NavLink } from 'react-router-dom'
import logo_blue from '../assets/icons/logo_blue.svg'

import facebook from '../assets/icons/facebook.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter_x from '../assets/icons/twitter_x.svg'


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      };

  return (
    <div className="padding h-full mt-10 bg-[#E6E9EE] max-container">

            <div className="flex gap-32 mt-5">

                <div className='flex flex-col'>

                    <div className='mb-10'>
                    <a href='/'>
                        <img src={logo_blue}
                            width={150}
                            height={35}      
                            alt ="logo-blue"
                        />
                    </a>
                    </div>
                    
                    <p className='text-[15px] mb-8 w-[300px]'>
                    Get Aerthmetal news first. Stay in touch with our latest updates, investor news and media releases.
                    </p>

                    <div>
                    <input type='email' placeholder='Email Address' className='py-2 px-2 mr-2 rounded-md'></input>
                    <button type='button' className= "py-2 px-8 rounded-md text-white bg-primary-blue hover:drop-shadow-lg hover:text-white transition-all duration-300 ease-in">Subscribe</button>
                    </div>

                </div>

                <div className='flex flex-col'>

                    <h1 className='text-primary-blue font-bold text-[16px] mb-8'>Company</h1>

                    <NavLink to='/about-us' onClick={scrollToTop}><p className='text-[14px] mb-5'>About Us</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Careers</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>News & Insights</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Partnerships</p></NavLink>

                </div>


                <div className='flex flex-col'>
                
                    <h1 className='text-primary-blue font-bold text-[16px] mb-8'>Services</h1>

                    <NavLink><p className='text-[14px] mb-5'>Aerthmetal Products</p></NavLink>
                    <NavLink to='/sustainability-page' onClick={scrollToTop}><p className='text-[14px] mb-5'>Sustainability</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Operations</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Assets</p></NavLink>

                </div>


                <div className='flex flex-col'>
                
                    <h1 className='text-primary-blue font-bold text-[16px] mb-8'>Support</h1>

                    <NavLink><p className='text-[14px] mb-5'>Help Centre</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>FAQ</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Contact Us</p></NavLink>

                </div>

            </div>


            {/* Bottom Part */}

            <div className='flex mt-8 border-t-2 border-gray-300 items-center justify-between'>

                    <div className='flex mt-5 gap-5'>
                    <NavLink><p className='text-[14px] mb-5'>Terms of Service</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Privacy Policy</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Security</p></NavLink>
                    <NavLink><p className='text-[14px] mb-5'>Sitemap</p></NavLink>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <NavLink><img src={facebook}/></NavLink>
                        <NavLink><img src={twitter_x}/></NavLink>
                        <NavLink><img src={instagram}/></NavLink>
                        <NavLink><img src={linkedIn}/></NavLink>

                        <p className='text-[14px]'>© 2024 Aerthmetal All rights reserved.</p>
                    </div>
            </div>
    
    
    </div>
  )
}

export default Footer
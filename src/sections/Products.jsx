import { NavLink } from 'react-router-dom';
import product_img1 from '../assets/images/product_img1.png';
import product_img2 from '../assets/images/product_img2.png';

const Products = () => {


  return (
    <div className="padding h-full mb-12">

        <div className="flex flex-col justify-between" data-aos="fade-down" data-aos-duration="1500">

            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="font-bold text-[32px] text-primary-blue w-[500px] mt-12">
                Our Products
                </h1>

                <p className="w-[700px] mt-3 text-[17px] leading-[30px]">
                We are committed to delivering high-quality products that meet our customers' needs and support sustainable development. </p>
            </div>


        <div className="flex gap-20 mt-10 justify-center">

            <div className="w-[450px] bg-white min-h-16 shadow-3xl rounded-md">
                <div className="mb-5 object-cover">
                    <img 
                    src={product_img1}
                    />
                </div>

                <div className="p-4 pb-4">
                    <h1 className="text-[28px] font-bold mb-2">Gold</h1>
                    <p className="font-light leading-6 mb-4 text-[15px]">At Aerthmetal, we're proud to supply high-quality gold, a precious metal that plays a vital role in powering innovation and progress. 
                    </p>
                    <p className="font-light leading-6 text-[15px]"></p>

                    <div className="flex items-start mb-5">
              <NavLink to='/product-gold'><button className= "py-2 px-6 rounded-md text-white bg-primary-blue hover:scale-105 transition-all duration-300 ease-in hover:border-secondary-red hover:text-white"
                onClick
              >
                  Learn More
              </button></NavLink>
                    </div>
                </div>
            </div>

            <div className="w-[450px] bg-white min-h-16 shadow-3xl rounded-md">
                <div className="mb-5 object-cover">
                    <img 
                    src={product_img2}
                    />
                </div>

                <div className="p-4 pb-4">
                    <h1 className="text-[28px] font-bold mb-2">Lithium</h1>
                    <p className="font-light leading-6 mb-4 text-[15px]">At Aerthmetal, we're dedicated to supplying high-quality lithium, a vital element that's driving the transition to a more sustainable world.
                    </p>
                    <p className="font-light leading-6 text-[15px]"></p>

                    <div className="flex items-start mb-5">
             <NavLink to='/product-lithium'> <button className= "py-2 px-6 rounded-md text-white bg-primary-blue hover:scale-105 transition-all duration-300 ease-in hover:border-secondary-red hover:text-white"
             onClick
             >
                  Learn More
              </button> </NavLink>
                    </div>
                </div>
            </div>
            
        </div>

        </div>
    
    </div>
  )
}

export default Products
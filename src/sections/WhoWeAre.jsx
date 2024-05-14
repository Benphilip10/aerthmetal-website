import figure from '../assets/images/figure.png';

const WhoWeAre = () => {
  return (
    <div className="bg-sec-pattern h-[600px] padding">
    
    <div data-aos = "zoom-in-up" data-aos-duration = "1200">
      <h1 className="font-bold text-[32px] text-center mt-12 text-primary-blue">Who We Are</h1>
      <h3 className="text-center text-[30px]">Providing essential minerals and resources</h3>
    </div>

    <div className="flex gap-5 justify-between mt-10">
    
    <div className='flex items-center' data-aos = "fade-in" data-aos-duration = "1000">
      <p className="w-[600px] text-[20px] leading-[30px] text-[#505660]">
      Aerthmetal is a modern mining and exploration company focusing on identifying, defining, and developing undervalued mining assets for commercial-scale production in Nigeria.
      <br/><br/>
      We believe that mining can be a force for good, creating economic opportunities, supporting communities, and providing essential materials for a sustainable future.
      </p>
    </div>

    <div className='flex items-start' data-aos = "fade-in" data-aos-duration = "1300">
      <img src={figure} alt="badge" height={300} width={300}/>
    </div>

    </div>
    </div>
  )
}

export default WhoWeAre
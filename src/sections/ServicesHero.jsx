import service_hero_img from '../assets/images/service_hero_img.png'

const ServicesHero = () => {
  return (
    
    <div className='relative' data-aos="fade-left" data-aos-duration="1000">
    <img
        src={service_hero_img}/>
        <p className='absolute bottom-[75px] left-20 px-8 py-2 rounded-full text-[14px] text-white bg-primary-blue'>Services</p>

        <h1 className='absolute bottom-[12px] left-20 text-[45px] font-medium text-white'>
        Aerthmetal’s services</h1>

    </div>

)
}

export default ServicesHero
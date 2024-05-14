import tailored_solution_icon from '../assets/icons/tailored_solution_icon.svg';
import tech_integration_icon from '../assets/icons/tech_integration_icon.svg';
import comprehensive_services_icon from '../assets/icons/comprehensive_services_icon.svg';
import global_monitoring_icon from '../assets/icons/global_monitoring_icon.svg';



const WhyUs = () => {
  return (

<div className="padding h-full bg-[#E6E9EE]" data-aos = "fade-in" data-aos-duration = "1000">
    
        <div className=''>
        <h1 className="font-bold text-[32px] mt-12 mb-8 text-primary-blue">Why Us</h1>
        </div>

    <div className='flex gap-10 mb-12 justify-center'>
        <div className="w-[500px]">
        <div className="p-2 rounded-md flex flex-col">
        <div className="flex gap-3 items-center mb-4">
            <div className="flex items-center">
                <img className="rounded-lg" 
                src={tailored_solution_icon}
                height={30}
                width={30}
                />
            </div>
            <div>
            <h1 className="text-[18px] font-bold ">Tailored Solution</h1>            
            </div>
        </div>

        <div>
            <p className="font-light leading-6 mb-2 text-[15px]">
            We customize our services to match the specific requirements of each project, ensuring optimal outcomes.
            </p>
        </div>
        </div>
        </div>

        {/* 2nd Card */}

        <div className="w-[500px]">
        <div className="p-2 rounded-md flex flex-col">
        <div className="flex gap-3 items-center mb-4">
            <div className="flex items-center">
                <img className="rounded-lg" 
                src={tech_integration_icon}
                height={30}
                width={30}
                />
            </div>
            <div>
            <h1 className="text-[18px] font-bold ">Technology Integration</h1>            
            </div>
        </div>

        <div>
            <p className="font-light leading-6 mb-2 text-[15px]">
            Aerthmetal leverages the latest technology to enhance operational efficiency, productivity, and safety.
            </p>
        </div>
        </div>
        </div>
    </div>


    <div className='flex gap-10 mb-12 justify-center'>
        <div className="w-[500px]">
        <div className="p-2 rounded-md flex flex-col">
        <div className="flex gap-3 items-center mb-4">
            <div className="flex items-center">
                <img className="rounded-lg" 
                src={comprehensive_services_icon}
                height={30}
                width={30}
                />
            </div>
            <div>
            <h1 className="text-[18px] font-bold ">Comprehensive Service</h1>            
            </div>
        </div>

        <div>
            <p className="font-light leading-6 mb-2 text-[15px]">
            From open pit mining to infrastructure construction and operational management, Aerthmetal offers a diverse range of services under one roof. </p>
        </div>
        </div>
        </div>


        {/*4th Card */}

        <div className="w-[500px]">
        <div className="p-2 rounded-md flex flex-col">
        <div className="flex gap-3 items-center mb-4">
            <div className="flex items-center">
                <img className="rounded-lg" 
                src={global_monitoring_icon}
                height={30}
                width={30}
                />
            </div>
            <div>
            <h1 className="text-[18px] font-bold">Global Monitoring</h1>            
            </div>
        </div>

        <div>
            <p className="font-light leading-6 mb-2 text-[15px]">
            Our ROC allows us to monitor and control operations at multiple sites globally, promoting consistency and quality.
            </p>
        </div>
        </div>
        </div>
    </div>


</div>
  )
}

export default WhyUs
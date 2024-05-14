import { Footer, ServicesHero } from "../sections";

import ServicesCard from "../components/ServicesCard";
import service_img1 from '../assets/images/service_img1.png';
import service_img2 from '../assets/images/service_img2.png';
import service_img3 from '../assets/images/service_img3.png';
import service_img4 from '../assets/images/service_img4.png';
import service_img5 from '../assets/images/service_img5.png';
import service_img6 from '../assets/images/service_img6.png';




const ServicesPage = () => {
  return (
            <div>
                <ServicesHero/>

                <div className="padding bg-grey-curve-bg h-full bg-no-repeat" data-aos="fade-in" data-aos-duration="600">
                        
                <div className="flex flex-col mt-20" data-aos='fade-down' data-aos-duration='900'>
                    <h1 className="font-bold text-[32px] text-primary-blue w-[400px] mt-12">
                        Mineral Exploration Services by Aerthmetal
                    </h1>
                    <p className="w-[700px] mt-2 text-[17px] leading-[30px]">
                    At Aerthmetal, we specialize in providing top-tier mining exploration services, leveraging our technical teams' expertise, cutting-edge technology, and a commitment to excellence. Our comprehensive suite of services covers the entire spectrum of mining exploration, from initial prospecting to resource evaluation.

                    </p>
                </div>


                    <div className=" mt-12 flex gap-6 mb-12">
                        <ServicesCard
                        image = {service_img1}
                        heading = "Geological Survey"
                        body1 = "1. Conducting detailed geological surveys to identify potential mining sites."
                        body2 = "2. Analyzing geological formations and structures to determine mineralization prospects"             
                        />

                        <ServicesCard
                        image = {service_img2}
                        heading = "Remote Sensing & satellite imaging"
                        body1 = "1. Utilizing state-of-the-art remote sensing technologies and satellite imaging for preliminary assessments."
                        body2 = "2. Mapping and interpreting surface features to identify anomalies and potential deposit sites."
                        />

                     <ServicesCard
                        image = {service_img3}
                        heading = "Geophysical Survey"
                        body1 = "1. Conducting geophysical surveys using advanced equipment to detect subsurface anomalies."
                        body2 ="2. Interpreting geophysical data to identify potential mineral deposits and structural characteristics."
                        />

                    </div>

                    {/* Cards 2nd row */}
                    <div className=" mt-14 flex gap-6 mb-12">
                        <ServicesCard
                        image = {service_img4}
                        heading = "Drilling Programs"
                        body1 = "1. Planning and executing drilling programs to extract core samples from identified target areas."
                        body2 = "2. Conducting diamond drilling, reverse circulation drilling, and other specialized drilling techniques."             
                        />

                        <ServicesCard
                        image = {service_img5}
                        heading = "Resources Estimation"
                        body1 = "1. Utilizing advanced software and methodologies to estimate the size and grade of mineral resources."
                        body2 = "2. Providing accurate and reliable resource assessments for informed decision-making."
                        />

                     <ServicesCard
                        image = {service_img6}
                        heading = "Geochemical Analysis"
                        body1 = "1. Collecting and analyzing soil, rock, and water samples for geochemical indicators."
                        body2 ="2. Identifying elemental anomalies indicative of potential mineralization."
                        />

                    </div>

                </div>
                <Footer/>
            </div>
  )
}

export default ServicesPage
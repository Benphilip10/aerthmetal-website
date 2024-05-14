import { Footer } from "../sections";
import add from "../assets/images/Add.png";
import minus from "../assets/images/Minus.png";
import pdf from "../assets/images/PDF.png";
import imagee1 from "../assets/images/curr1.png";
import imagee2 from "../assets/images/curr2.png";
import imagee3 from "../assets/images/curr3.png";

const Reports = () => {
  return (
    <>
      <section className="max-container mb-96">
        <div
          className="w-full h-[400px] bg-reports-bg max-container relative  bg-no-repeat"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button className="bg-[#012352] text-white px-8 py-2 rounded-full ">
              Report
            </button>
            <h1 className="text-5xl mt-3 text-white font-medium">
              Reports & Download Center
            </h1>
          </div>
        </div>
        <div className="padding" data-aos="fade-left" data-aos-duration="900">
          <h1 className="font-medium text-primary-blue text-3xl mb-2 mt-8">
            Reports
          </h1>
          <h1 className="text-[#6B7280] w-[88%]">
            This report provides an overview of our company's performance and
            progress towards our sustainability goals. We are committed to
            transparency and accountability, and this report highlights our
            achievements, challenges, and future directions.
          </h1>
        </div>
        <div
          className="padding flex flex-col space-y-4"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              checked={true}
            />
            <span className="block max-h-14 max-w-md overflow-hidden rounded-md  transition-all duration-300 peer-checked/showLabel:max-h-52 border-2 border-black">
              <div className="flex items-center justify-between pl-4">
                <div className="flex space-x-6">
                  <h1 className="font-medium">01</h1>
                  <h1 className="font-medium">Code of Conducts</h1>
                </div>
                <div className="">
                  <img src={add} className="size-[52px]" />
                </div>
              </div>
              <p className="mb-2 flex items-center mt-3 ml-14 text-gray-700">
                Our Conduct of Code
                <img src={pdf} className="w-16 ml-4" />
              </p>
            </span>
          </label>
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            />
            <span className="block max-h-14 max-w-md overflow-hidden rounded-md  transition-all duration-300 peer-checked/showLabel:max-h-52 border-2 border-black">
              <div className="flex items-center justify-between pl-4">
                <div className="flex space-x-6">
                  <h1 className="font-medium">02</h1>
                  <h1 className="font-medium">
                    Anti-bribery & Anti-corruption policies
                  </h1>
                </div>
                <div className="">
                  <img src={minus} className="size-[52px]" />
                </div>
              </div>
              <p className="mb-2 flex items-center mt-3 ml-14">
                Download
                <img src={pdf} className="w-16 ml-4" />
              </p>
            </span>
          </label>
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            />
            <span className="block max-h-14 max-w-md overflow-hidden rounded-md  transition-all duration-300 peer-checked/showLabel:max-h-52 border-2 border-black">
              <div className="flex items-center justify-between pl-4">
                <div className="flex space-x-6">
                  <h1 className="font-medium">03</h1>
                  <h1 className="font-medium">Child & Forced labour Policy</h1>
                </div>
                <div className="">
                  <img src={minus} className="size-[52px]" />
                </div>
              </div>
              <p className="mb-2 flex items-center mt-3 ml-14">
                Our Conduct of Code
                <img src={pdf} className="w-16 ml-4" />
              </p>
            </span>
          </label>
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            />
            <span className="block max-h-14 max-w-md overflow-hidden rounded-md  transition-all duration-300 peer-checked/showLabel:max-h-52 border-2 border-black">
              <div className="flex items-center justify-between pl-4">
                <div className="flex space-x-6">
                  <h1 className="font-medium">04</h1>
                  <h1 className="font-medium">ESG Policy</h1>
                </div>
                <div className="">
                  <img src={minus} className="size-[52px]" />
                </div>
              </div>
              <p className="mb-2 flex items-center mt-3 ml-14">
                Download
                <img src={pdf} className="w-16 ml-4" />
              </p>
            </span>
          </label>
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            />
            <span className="block max-h-14 max-w-md overflow-hidden rounded-md  transition-all duration-300 peer-checked/showLabel:max-h-52 border-2 border-black">
              <div className="flex items-center justify-between pl-4">
                <div className="flex space-x-6">
                  <h1 className="font-medium">05</h1>
                  <h1 className="font-medium">Whistleblower Policy</h1>
                </div>
                <div className="">
                  <img src={minus} className="size-[52px]" />
                </div>
              </div>
              <p className="mb-2 flex items-center mt-3 ml-14">
                Download
                <img src={pdf} className="w-16 ml-4" />
              </p>
            </span>
          </label>
        </div>
        <div
          className="padding bg-[#E6E9EE] mt-12 -mb-60"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <h1 className="text-4xl font-semibold text-primary-blue">
            Current Reports
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex bg-card-pattern mt-16 shadow-md">
              <div className="p-3 flex-col flex justify-between hover:bg-[#022553] hover:text-white duration-300 transition-all ease-in-out  rounded-tl-lg rounded-bl-lg text-[#022553] cursor-pointer">
                <h1 className="font-medium">Anti-Bribery Policy 2024</h1>
                <h1 className=" font-medium underline">Download Full PDF</h1>
              </div>
              <div className="rounded-br-lg rounded-tr-md">
                <img
                  src={imagee1}
                  className="h-full rounded-br-lg rounded-tr-md"
                />
              </div>
            </div>
            <div className="flex bg-card-pattern rounded-lg mt-16 shadow-md ">
              <div className="p-3 flex-col flex justify-between hover:bg-[#022553] hover:text-white text-[#022553] duration-300 transition-all ease-in-out  rounded-tl-lg rounded-bl-lg cursor-pointer">
                <h1 className=" font-medium">Whistleblower Policy</h1>
                <h1 className=" font-medium underline">Download Full PDF</h1>
              </div>
              <div className="rounded-br-lg rounded-tr-md">
                <img
                  src={imagee2}
                  className="h-full rounded-br-lg rounded-tr-md"
                />
              </div>
            </div>
            <div className="flex bg-card-pattern rounded-lg mt-16 shadow-md">
              <div className="p-3 flex-col flex justify-between hover:bg-[#022553] hover:text-white duration-300 transition-all ease-in-out  rounded-tl-lg rounded-bl-lg text-[#022553] cursor-pointer">
                <h1 className=" font-medium">Child & forced labour Policy</h1>
                <h1 className=" font-medium underline">Download Full PDF</h1>
              </div>
              <div className="rounded-br-lg rounded-tr-md">
                <img
                  src={imagee3}
                  className="h-full rounded-br-lg rounded-tr-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reports;

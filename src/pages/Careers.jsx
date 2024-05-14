
import career from "../assets/images/career.png";
import { Footer } from "../sections";

const Careers = () => {
  return (
    <>
      <section className="max-container">
        <div className="w-full h-[400px] bg-career-bg max-container relative">
          <div className="absolute bottom-0 bg-[rgba(17,24,39,0.3)] w-full padding">
            <button
              className="bg-[#012352] text-white
             px-4 py-2 rounded-full "
            >
              Careers
            </button>
            <h1 className="text-3xl mt-3 text-white font-medium ">
              Come Work With Us
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={career} className="w-2/4 mb-16 mt-16" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;

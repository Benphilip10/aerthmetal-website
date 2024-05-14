import PropTypes from "prop-types";

const NewsCard = (props) => {

    NewsCard.propTypes = {
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired, //This line for prop validation
        title: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      };

  return (
    <div className="flex flex-1 flex-row mb-10">
        
        <img
            className="flex-wrap w-[300px]"
            src ={props.image}
        />

    <div className="flex flex-col ml-8">
        <div>
            <h1 className="font-bold text-[20px] mb-2">{props.title}</h1>
        </div>

        <div className="flex justify-between">
            <p className=" font-normal text-[14px] text-primary-blue">{props.date}</p>
            <p className=" font-normal text-[14px] text-primary-blue">{props.comment}</p>
        </div>

        <div className="mt-8">
        <button type="button" className= "bg-primary-blue py-2 px-5 rounded-md text-white hover:scale-105 transition-all duration-300 ease-in hover:border-secondary-red">
            Read Here
        </button>
        </div>
    </div>


    </div>
  )
}

export default NewsCard
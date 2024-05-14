import PropTypes from "prop-types";

const ApproachCard2 = (props) => {
  ApproachCard2.propTypes = {
    iconImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

  return (
    <div className="bg-card-pattern bg-white drop-shadow-md rounded-lg p-5 w-full h-full">
      <div className="p-2 rounded-md flex flex-col">
        <div className="flex gap-3 items-center mb-4">
          <div className="flex items-center">
            <img
              className="rounded-lg"
              src={props.iconImg}
              height={50}
              width={50}
            />
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-bold text-primary-blue">
            {props.title}
          </h1>
        </div>

        <div>
          <p className="font-light leading-6 mb-2 text-[15px]">{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard2;

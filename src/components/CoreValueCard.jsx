import PropTypes from "prop-types";

const CoreValueCard = (props) => {

    CoreValueCard.propTypes = {
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      };

  return (

    <div className="bg-primary-blue/20 border-white/40 border backdrop-blur-md drop-shadow-md 
    rounded-lg p-5 w-full h-full ">
    
    <div className="rounded-md flex flex-col">
            <div className="flex gap-3 items-center mb-4">
                <div className="flex items-center">
                    <img className="rounded-lg bg-primary-blue opacity-60 p-2" 
                    src={props.icon}
                    height={75}
                    width={75}
                    />
                </div>
                <div>
                <h1 className="text-[24px] font-medium text-white">{props.title}</h1>            
                </div>
            </div>

    <div>
        <p className="font-light leading-8 mb-2 text-[18px] text-white">
            {props.body}
        </p>
    </div>
    </div>
    </div>

  )
}

export default CoreValueCard
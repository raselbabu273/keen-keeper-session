import { useContext } from "react";
import { TimelineContext } from "../Context/Context";


const Timeline = () => {
    
const {timelineData} = useContext(TimelineContext);
console.log(timelineData);


    return (
        <div>
            Timeline
        </div>
    );
};

export default Timeline;
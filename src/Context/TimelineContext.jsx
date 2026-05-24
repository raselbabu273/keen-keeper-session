// import React from 'react';

// import { useState } from "react";
import { TimelineContext } from "./ContextProvider";

export const TimelineProvider = ({children}) => {

    // const [timelineData, setTimelineData] = useState([]);
    const data = {
        test: 'demo'
    }
    
    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;
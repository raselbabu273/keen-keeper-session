import { useContext } from "react";
import { TimelineContext } from "../Context/Context";
import { LuPhoneCall, LuVideo } from "react-icons/lu";
import { BsChatRightText } from "react-icons/bs";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);
  console.log(timelineData);

  const icons = (action) => {
    switch (action?.toLowerCase()) {
      case "call":
        return <LuPhoneCall />;
      case "text":
        return <BsChatRightText />;
      case "video":
        return <LuVideo />;
      default:
        return;
    }
  };

  return (
    <div className="p-8 flex justify-center my-20">
      <div className="max-w-11/16 w-full space-y-6">
        
        <h1 className="text-4xl font-extrabold text-[#244D3F]">
          Timeline
        </h1>

        <div className="relative max-w-xs">
          <select
            className="w-full bg-[#FFFFFF] border border-gray-200 text-[#64748B] rounded-md px-4 py-3 pr-10 appearance-none shadow-sm focus:outline-none focus:border-emerald-500 transition duration-150 text-sm font-medium"
            defaultValue=""
          >
            <option value="" disabled>
              Filter timeline
            </option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Video Calls</option>
          </select>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#64748B]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          {timelineData && timelineData.length > 0 ? (
            timelineData.map((data) => (
              <div
                key={data.id}
                className="bg-[#FFFFFF] border border-gray-100 rounded-md p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition duration-200">

                <div className="w-12 h-12 rounded-md bg-[#FFFFFF] flex items-center justify-center text-2xl shadow-sm">
                  {icons(data.action)}
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-slate-500 font-medium">
                    <span className="font-semibold text-[#1e3a2f] text-base capitalize">
                      {data.action}
                    </span>
                    {` with ${data.name}`}
                  </p>
                  <span className="text-xs font-semibold text-[#64748B] mt-1">
                    {data.time
                      ? new Date(data.time).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Unknown Date"}
                  </span>
                </div>
              </div>
            ))
          ) : (

            <div className="bg-[#FFFFFF] border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-[#1e3a2f] text-xl font-medium">
              No interactions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

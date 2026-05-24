
import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { LuArchive, LuPhoneCall, LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { TimelineContext } from "../Context/Context";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();

  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == parseInt(id));

  const {
    picture,
    name,
    status,
    tags,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = expectedFriend;

  const {timelineData, setTimelineData} = useContext(TimelineContext);
  
  const handleTimelineData = (type, userDetails) => {

    console.log(userDetails);
    
    const newTimelineData = {
      ...userDetails,
      action: type,
      time: new Date().toISOString(),
    };

    setTimelineData([...timelineData, newTimelineData]);
    
    if(type.toLowerCase() === 'call'){
        toast.success(`Call with ${userDetails.name}`)
    }
    else if(type.toLowerCase() === 'text'){
        toast.success(`Text with ${userDetails.name}`)
    }
    else{
        toast.success(`Video call with ${userDetails.name}`)
    }
  };

  const statusStyles = {
    Overdue: "bg-red-500 text-white",
    "Almost due": "bg-amber-500 text-white",
    "On-Track": "bg-emerald-600 text-white",
  };
  const currentStatusStyle = statusStyles[status] || "";

  return (
    <div className=" p-8 flex justify-center my-20">
      <div className="max-w-12/16 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-[#FFFFFF] rounded-md shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center">
            <img
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm mb-3"
              src={picture}
              alt={name}
            />
            <h2 className="text-xl font-semibold mb-1">{name}</h2>

            <div className="flex justify-center mt-1 mb-2">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${currentStatusStyle}`}
              >
                {status}
              </span>
            </div>

            <div>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge text-green-800 bg-green-200 mr-1.5 rounded-full mb-2"
                >
                  {tag}
                </div>
              ))}
            </div>

            <p className="text-[#64748B] italic text-sm font-medium mb-1">
              {bio}
            </p>
            <p className="text-[#64748B] text-sm">Preferred: {email}</p>
          </div>

          <div className="space-y-2">
            <button className="btn w-full flex items-center justify-center gap-2 bg-[#FFFFFF] border border-gray-200 font-medium py-1 rounded-md shadow-sm text-sm">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>
            <button className="btn w-full flex items-center justify-center gap-2 bg-[#FFFFFF] border border-gray-200 font-medium py-5 rounded-md shadow-sm text-sm">
              <LuArchive /> Archive
            </button>
            <button className="btn w-full flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-red-50 border border-gray-200 hover:border-red-200 text-red-500 font-medium py-5 rounded-md shadow-sm text-sm">
              <RiDeleteBinLine /> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-[#FFFFFF] p-7 rounded-md border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-[#244D3F] mb-1">
                {days_since_contact}
              </div>
              <div className="text-xs font-medium text-[#64748B]">
                Days Since Contact
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-7 rounded-md border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-[#244D3F] mb-1">
                {goal}
              </div>
              <div className="text-xs font-medium text-[#64748B]">
                Goal (Days)
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-7 rounded-md border border-gray-100 shadow-sm text-center">
              <div className="text-xl font-bold text-[#244D3F] md:text-2xl pt-1 mb-1">
                {next_due_date}
              </div>
              <div className="text-xs font-medium text-[#64748B]">Next Due</div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-md border border-gray-100 shadow-sm p-7 flex justify-between items-start">
            <div>
              <h3 className="text-[#244D3F] font-bold text-base mb-3">
                Relationship Goal
              </h3>
              <p className="text-[#64748B] text-sm">
                Connect every{" "}
                <span className="font-bold text-slate-800">{goal} days</span>
              </p>
            </div>
            <button className="btn flex items-center gap-1 hover:bg-gray-100 text-slate-600 border border-gray-200 px-3 py-1.5 rounded-md text-xs font-medium transition duration-200">
              <FaRegEdit /> Edit
            </button>
          </div>

          <div className="bg-[#FFFFFF] rounded-md border border-gray-100 shadow-sm p-8">
            <h3 className="text-[#244D3F] font-bold text-base mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleTimelineData("call", expectedFriend)}
                className="flex flex-col items-center justify-center p-5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-md transition duration-200 gap-2 cursor-pointer"
              >
                <span className="text-xl">
                  <LuPhoneCall />
                </span>
                <span className="text-sm font-medium">Call</span>
              </button>

              <button
                onClick={() => handleTimelineData("text", expectedFriend)}
                className="flex flex-col items-center justify-center p-5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-md transition duration-200 gap-2 cursor-pointer"
              >
                <span className="text-xl">
                  <MdOutlineTextsms />
                </span>
                <span className="text-sm font-medium">Text</span>
              </button>

              <button
                onClick={() => handleTimelineData("video", expectedFriend)}
                className="flex flex-col items-center justify-center p-5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-md transition duration-200 gap-2 cursor-pointer"
              >
                <span className="text-xl">
                  <LuVideo />
                </span>
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

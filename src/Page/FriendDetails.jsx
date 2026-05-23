
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();

  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == id);

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

  const statusStyles = {
    Overdue: "bg-red-500 text-white",
    "Almost due": "bg-amber-500 text-white",
    "On-Track": "bg-emerald-600 text-white",
  };
  const currentStatusStyle = statusStyles[status] || "";

  return (
    <div className=" p-8 flex justify-center items-start my-20">
      <div className="max-w-12/16 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ================= LEFT COLUMN: PROFILE & QUICK ACTIONS ================= */}
        <div className="space-y-4">
          <div className="bg-[#FFFFFF] rounded-md shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <img
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-sm mb-4"
              src={picture}
              alt={name}
            />
            <h2 className="text-xl font-semibold mb-1">
              {name}
            </h2>

            {/* Status Badge */}
            <div className="flex justify-center mt-1 mb-2">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${currentStatusStyle}`}
              >
                {status}
              </span>
            </div>

            {/* Category Tags */}
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

            <p className="text-[#64748B] italic text-sm font-medium mb-1">{bio}</p>
            <p className="text-[#64748B] text-sm">
              Preferred: {email}
            </p>
          </div>

          {/* Action List Buttons */}
          <div className="space-y-2">
            <button className="btn w-full flex items-center justify-center gap-2 bg-[#FFFFFF] border border-gray-200 font-medium py-5 rounded-md shadow-sm text-sm">
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

        {/* ================= RIGHT COLUMN: METRICS & CONTEXT ================= */}
        <div className="md:col-span-2 space-y-6">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-emerald-950 mb-1">
                {days_since_contact}
              </div>
              <div className="text-xs font-medium text-slate-400">
                Days Since Contact
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-emerald-950 mb-1">
                {goal}
              </div>
              <div className="text-xs font-medium text-slate-400">
                Goal (Days)
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-xl font-bold text-emerald-950 md:text-2xl pt-1 mb-1">
                {next_due_date}
              </div>
              <div className="text-xs font-medium text-slate-400">Next Due</div>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-[#FFFFFF] rounded-xl border border-gray-100 shadow-sm p-6 flex justify-between items-start">
            <div>
              <h3 className="text-emerald-900 font-bold text-base mb-3">
                Relationship Goal
              </h3>
              <p className="text-slate-500 text-sm">
                Connect every{" "}
                <span className="font-bold text-slate-800">
                  {goal} days
                </span>
              </p>
            </div>
            <button className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 text-slate-600 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200">
              ✏️ Edit
            </button>
          </div>

          {/* Quick Check-In Communications Panel */}
          <div className="bg-[#FFFFFF] rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-emerald-900 font-bold text-base mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-xl transition duration-200 gap-2">
                <span className="text-xl">📞</span>
                <span className="text-sm font-medium">Call</span>
              </button>

              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-xl transition duration-200 gap-2">
                <span className="text-xl">💬</span>
                <span className="text-sm font-medium">Text</span>
              </button>

              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-100 rounded-xl transition duration-200 gap-2">
                <span className="text-xl">📹</span>
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

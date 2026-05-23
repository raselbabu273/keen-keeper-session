import { Link } from "react-router";

const Friends = ({ friend }) => {
  const statusStyles = {
    Overdue: "bg-red-500 text-white px-2",
    "Almost due": "bg-amber-500 text-white",
    "On-Track": "bg-emerald-600 text-white",
  };

  const currentStatusStyle = statusStyles[friend.status] || "";

  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="card bg-[#FFFFFF] shadow-md pt-2 transition-all duration-240 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_20px_30px_rgba(0,0,0,0.08),0_4px_12px_rgba(52,211,153,0.15)]">
        <figure>
          <img
            className="w-32 h-32 rounded-full object-cover p-2"
            src={friend.picture}
            alt={friend.name}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">{friend.name}</h2>
          <p className="text-[#64748B]">
            <small>{friend.days_since_contact}d Ago</small>
          </p>
          <div>
            {friend.tags.map((tag, index) => (
              <div
                key={index}
                className="badge text-green-800 bg-green-200 mr-1 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${currentStatusStyle}`}
            >
              {friend.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Friends;

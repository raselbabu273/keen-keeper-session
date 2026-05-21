import { Link } from "react-router";

const Friends = ({friend}) => {
  return (
    <Link>
      <div>
        <div className="card bg-base-100 shadow-md pt-2">
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
              <small>62d Ago</small>
            </p>
            <div>
              {friend.tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge text-green-800 bg-green-100 mr-1"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className=" ">{friend.status}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Friends;

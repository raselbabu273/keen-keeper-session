import { use } from "react";
import { FiPlus } from "react-icons/fi";
import Friends from "./Friends";

const friendPromise = fetch("/friends.json").then((res) => res.json());

const HomePage = () => {
  const friends = use(friendPromise);

  return (
    <div className="py-20 w-11/16 mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <div className="flex justify-center mt-8">
          <button className="btn bg-[#244D3F] text-white flex items-center p-2 rounded-md">
            <FiPlus /> Add a Friends
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 border-b border-gray-300">
        <div className="text-center my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl font-semibold mb-2">8</h3>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="text-center my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl font-semibold mb-2">3</h3>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="text-center my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl font-semibold mb-2">5</h3>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="text-center my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl font-semibold mb-2">11</h3>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>

      <div className="">
        <h3 className="text-2xl font-bold my-10">Your Friends</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => <Friends key={friend.id} friend={friend}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

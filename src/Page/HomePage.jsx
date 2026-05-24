import { use } from "react";
import Friends from "./Friends";

const friendPromise = fetch("/friends.json").then((res) => res.json());

const HomePage = () => {
  const friends = use(friendPromise);

  return (
    <div className="pb-10 max-w-14/16 md:pb-20 md:max-w-12/16 mx-auto">
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

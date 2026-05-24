// import React from 'react';

import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TimelineContext } from "../Context/Context";

const Hero = () => {

   const {timelineData} = useContext(TimelineContext);

  return (
    <div className="pt-20 max-w-12/16 mx-auto">
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

      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 border-b border-gray-300">
        <div className="text-center bg-[#FFFFFF] my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">8</h3>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="text-center bg-[#FFFFFF] my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">3</h3>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="text-center bg-[#FFFFFF] my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">5</h3>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="text-center bg-[#FFFFFF] my-10 p-8 shadow-md rounded-md w-full">
          <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">{timelineData.length}</h3>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

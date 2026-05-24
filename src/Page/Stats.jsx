// import React from 'react';
import { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TimelineContext } from "../Context/Context";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);

  const chartData = timelineData.reduce((acc, current) => {
    const actionName = current.action ? current.action.trim() : "Unknown";

    const existing = acc.find(
      (item) => item.name.toLowerCase() === actionName.toLowerCase(),
    );

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: actionName, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = {
    text: "#8B5CF6",
    call: "#244D3F",
    video: "#34A853",
  };

  const getColor = (name) => {
    const key = name?.toLowerCase()?.trim();
    return COLORS[key];
  };

  return (
    <div className="md:p-8 flex justify-center my-12">
      <div className="w-full md:max-w-11/16 mx-auto p-6 space-y-6">
        <h2 className="text-4xl font-extrabold text-[#244D3F]">
          Friendship Analytics
        </h2>

        <div className="bg-[#FFFFFF] border border-gray-100 rounded-md p-8 shadow-sm space-y-6">
          <h3 className="text-base font-semibold text-[#244D3F] opacity-90">
            By Interaction Type
          </h3>

          <div className="w-full h-72 relative block">
            {chartData && chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={75}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={getColor(entry.name)}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            ) : (
             
              <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm font-medium animate-pulse">
                No analytics records loaded yet.
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#64748B] pt-2">
            {chartData.map((item, index) => (
              <div key={`legend-${index}`} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: getColor(item.name) }}
                />
                <span className="capitalize">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

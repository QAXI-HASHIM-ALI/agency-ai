import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      <Title
        title="Meet Our Team"
        description="A group of passionate experts dedicated to turning ideas into impactful digital solutions."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((item, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500 dark:text-white/75">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

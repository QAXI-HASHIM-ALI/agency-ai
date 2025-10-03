import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "Boosting app visibility and user acquisition through targeted campaigns and growth strategies.",
      icon: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "Designing and managing intuitive dashboards that simplify data tracking and decision-making.",
      icon: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "Helping fitness apps reach the right audience with creative promotions and engagement tactics.",
      icon: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        description="A showcase of the projects we’ve crafted to help brands grow and thrive in the digital world."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.icon} alt="" className="w-full rounded-xl" />
            <h3 className="text-lg font-semibold mt-3 mb-2">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;

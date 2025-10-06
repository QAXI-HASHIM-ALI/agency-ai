import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertisement",
      description:
        "Targeted ad campaigns that boost visibility and drive conversions.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "Engaging strategies to attract, educate, and convert your audience.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "High-quality, SEO-friendly content tailored to your brand’s voice.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "Creative social media management to grow and connect with your community.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        description="We provide tailored digital solutions designed to help your business grow, engage customers, and achieve measurable success."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;

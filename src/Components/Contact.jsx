import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "b6fb8d25-9ad2-4cf9-8220-2744beeff071");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thankyou for reaching out!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Get In Touch"
        description="Have a project in mind? Let's talk about it!"
      />
      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Your Email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Your Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;

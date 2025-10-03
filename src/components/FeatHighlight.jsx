import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Member Status",
    desc: "Easily manage member information, track expiration dates, and keep their status up to date.",
    img: "/images/members.png", // replace with your image
    link: "#",
  },
  {
    title: "Trainer Hub",
    desc: "Manage trainers, track performance, and streamline communication effortlessly.",
    img: "/images/trainer.png",
    link: "#",
  },
  {
    title: "Income Tracker",
    desc: "Track your gym’s revenue trends in real-time to make informed financial decisions.",
    img: "/images/revenue.png",
    link: "#",
  },
];

const SuccessSection = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Boost Your Gym’s Success
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Tools and features to keep your fitness business running smoothly and efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {highlights.map(({ title, desc, img, link }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-900/10 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-48 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;

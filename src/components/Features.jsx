import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Revenue Tracking",
    desc: "Monitor your gym's income streams and expenses effortlessly to maximize profitability.",
    icon: "💰",
  },
  {
    title: "Member Management",
    desc: "Easily manage memberships, renewals, and member profiles all in one place.",
    icon: "👥",
  },
  {
    title: "Class Scheduling",
    desc: "Organize and schedule classes with trainers, making attendance simple and efficient.",
    icon: "📅",
  },
  {
    title: "Performance Insights",
    desc: "Get detailed reports and analytics to optimize your gym’s daily operations.",
    icon: "📊",
  },
];

// Section fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const OptimizeSection = () => {
  return (
    <motion.section
      className="bg-[#1e1e1e] text-white py-20 px-6 md:px-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-800/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          variants={fadeUp}
          custom={1}
        >
          Optimize Your Gym Operations
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed"
          variants={fadeUp}
          custom={2}
        >
          Take full control of your gym operation with powerful tools for tracking revenue,
          managing members, scheduling classes and more.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map(({ title, desc, icon }, index) => (
            <motion.div
              key={index}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 shadow-md hover:shadow-xl hover:border-red-800/40 transition-all duration-300"
              variants={fadeUp}
              custom={index + 3}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OptimizeSection;

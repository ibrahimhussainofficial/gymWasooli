// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-[#1e1e1e] text-white min-h-screen px-6 md:px-12 pt-32">
//       <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center min-h-screen">
//         {/* Title with fade effect */}
//         <h1
//           className="text-5xl md:text-7xl font-extrabold mb-6 max-w-5xl"
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
//             maskImage:
//               "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
//           }}
//         >
//           <span className="block">Simplify Your</span>
//           <span className="block mt-2">Fitness Business</span>
//         </h1>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed animate-fade-up">
//           Manage members, schedule classes, and coordinate trainers — all in one
//           powerful, intuitive platform designed for gyms of any size.
//         </p>

//         {/* Button group */}
//         <div className="flex gap-4 mb-12 animate-fade-up">
//           <button
//             className="bg-red-800 hover:bg-red-900 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-xl shadow-lg"
//           >
//             Book a Demo
//           </button>
//           <button
//             className="bg-transparent border border-red-800 hover:border-red-900 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-xl"
//           >
//             Learn More
//           </button>
//         </div>

//         {/* Dashboard Image */}
//         <div className="mt-6 flex justify-center w-full animate-fade-up">
//           <img
//             src="./dash.jpg"
//             alt="Gym Management Dashboard"
//             className="w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-800"
//             style={{
//               WebkitMaskImage:
//                 "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)",
//               maskImage:
//                 "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)",
//             }}
//           />
//         </div>

//         {/* Supporting text */}
//         <p className="mt-10 max-w-3xl text-center text-gray-400 text-lg px-6 animate-fade-up">
//           Experience seamless gym management with <span className="text-red-800 font-semibold">Gym Wasooli</span> — built to scale with your fitness business.
//         </p>

//         {/* Partner logos */}
//         <div className="mt-16 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center animate-fade-up">
//           {[1, 2, 3, 4, 5, 6].map((num) => (
//             <img
//               key={num}
//               src={`/gyms/gym${num}.png`}
//               alt={`Gym ${num}`}
//               className="mx-auto h-14 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";

// Fade up reusable variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

// Image zoom + float effect
const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.8, duration: 1, ease: "easeOut" },
  },
};

// Logo pop effect
const popIn = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <motion.section
      className="bg-[#1e1e1e] text-white min-h-screen px-6 md:px-12 pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center min-h-screen">
        
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 max-w-5xl"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="block">Simplify Your</span>
          <span className="block mt-2">Fitness Business</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Manage members, schedule classes, and coordinate trainers — all in one
          powerful, intuitive platform designed for gyms of any size.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <button className="bg-red-800 hover:bg-red-900 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-xl shadow-lg">
            Book a Demo
          </button>
          <button className="bg-transparent border border-red-800 hover:border-red-900 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-xl">
            Learn More
          </button>
        </motion.div>

        {/* Dashboard Image with Floating Animation */}
        <motion.div
          className="mt-6 flex justify-center w-full"
          variants={zoomIn}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="./dash.jpg"
            alt="Gym Management Dashboard"
            className="w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-800"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)",
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Supporting text */}
        <motion.p
          className="mt-10 max-w-3xl text-center text-gray-400 text-lg px-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Experience seamless gym management with{" "}
          <span className="text-red-800 font-semibold">Gym Wasooli</span> — built to scale with your fitness business.
        </motion.p>

        {/* Partner logos with Pop Effect */}
        <motion.div
          className="mt-16 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center"
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6].map((num, i) => (
            <motion.img
              key={num}
              src={`/gyms/gym${num}.png`}
              alt={`Gym ${num}`}
              className="mx-auto h-14 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              variants={popIn}
              custom={i + 5}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

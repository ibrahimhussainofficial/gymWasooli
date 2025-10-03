import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Cena",
    role: "Gym Owner",
    feedback:
      "I've seen massive improvements in my gym's performance thanks to the expert trainers. Highly recommend!",
    img: "/images/user1.jpg",
    rating: 4.9,
  },
  {
    name: "Maria Gomez",
    role: "Personal Trainer",
    feedback:
      "The trainers are dedicated and professional. My gym members love them!",
    img: "/images/user2.jpg",
    rating: 4.9,
  },
  {
    name: "David Lee",
    role: "Gym Manager",
    feedback:
      "Excellent trainers, fantastic customer support. Couldn't ask for more!",
    img: "/images/user3.jpg",
    rating: 4.9,
  },
  {
    name: "Devon Lane",
    role: "Gym Owner",
    feedback:
      "Expert trainers who know their craft! Highly recommend for any gym.",
    img: "/images/user4.jpg",
    rating: 4.9,
  },
  {
    name: "Marvin McKinney",
    role: "Fitness Enthusiast",
    feedback:
      "The trainers have transformed my workout routine! I'm more motivated than ever.",
    img: "/images/user5.jpg",
    rating: 4.9,
  },
  {
    name: "John Cena",
    role: "Gym Owner",
    feedback:
      "I've seen massive improvements in my gym's performance thanks to the expert trainers. Highly recommend!",
    img: "/images/user1.jpg",
    rating: 4.9,
  },
  {
    name: "Maria Gomez",
    role: "Personal Trainer",
    feedback:
      "The trainers are dedicated and professional. My gym members love them!",
    img: "/images/user2.jpg",
    rating: 4.9,
  },
  {
    name: "David Lee",
    role: "Gym Manager",
    feedback:
      "Excellent trainers, fantastic customer support. Couldn't ask for more!",
    img: "/images/user3.jpg",
    rating: 4.9,
  },
  {
    name: "Marvin McKinney",
    role: "Fitness Enthusiast",
    feedback:
      "The trainers have transformed my workout routine! I'm more motivated than ever.",
    img: "/images/user5.jpg",
    rating: 4.9,
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="relative bg-[#1e1e1e] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl m-auto">
          Hear from gym owners and fitness enthusiasts who trust Gym Wasooli to
          help them achieve their goals.
        </p>
      </motion.div>

      {/* Grid with fade mask */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 25%, rgba(30,30,30,1) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to top, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 25%, rgba(30,30,30,1) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        {testimonials.map(({ name, role, feedback, img, rating }, idx) => (
          <motion.div
            key={idx}
            className="bg-[#121212] border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-red-900/10 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="text-gray-600 text-2xl mb-4" />

            <p className="text-gray-300 mb-6 leading-relaxed">"{feedback}"</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-2xl object-cover border-2 border-red-900"
                />
                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-sm text-gray-400">{role}</p>
                </div>
              </div>
              <div className="flex items-center text-yellow-400 font-semibold">
                <FaStar className="mr-1" /> {rating}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

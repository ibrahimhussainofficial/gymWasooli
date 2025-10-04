import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";

export default function RequestDemo() {
  return (
    <section className="bg-[#1e1e1e] text-white min-h-screen flex items-center justify-center py-16 px-6 md:px-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 mt-6 md:mt-0">
            Request a Demo
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Discover how{" "}
            <span className="text-red-600 font-semibold">Gym Wasooli</span> can
            streamline your gym operations, manage subscriptions, handle staff,
            and boost customer satisfaction. Fill out the form and let us walk
            you through it.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Personalized product walkthrough</li>
            <li>✔ Answers to all your questions</li>
            <li>✔ Explore features that matter to you</li>
          </ul>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-[#121212] border border-gray-800 rounded-2xl shadow-lg mt-6 p-8 md:p-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700 focus-within:border-red-600 transition">
                <FaUser className="ml-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent px-3 py-3 focus:outline-none text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700 focus-within:border-red-600 transition">
                <FaEnvelope className="ml-3 text-gray-500" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-3 py-3 focus:outline-none text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700 focus-within:border-red-600 transition">
                <FaPhoneAlt className="ml-3 text-gray-500" />
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full bg-transparent px-3 py-3 focus:outline-none text-white"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-300 mb-2">
                Company / Gym Name
              </label>
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700 focus-within:border-red-600 transition">
                <FaBuilding className="ml-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Logics Labs Gym"
                  className="w-full bg-transparent px-3 py-3 focus:outline-none text-white"
                />
              </div>
            </div>

            {/* Employees */}
            <div>
              <label className="block text-gray-300 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                placeholder="e.g. 15"
                className="w-full bg-[#1e1e1e] rounded-lg border border-gray-700 focus:border-red-600 transition px-4 py-3 text-white"
              />
            </div>

            {/* Service of Interest */}
            <div>
              <label className="block text-gray-300 mb-2">
                Service of Interest
              </label>
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700 focus-within:border-red-600 transition">
                <FaClipboardList className="ml-3 text-gray-500" />
                <select className="w-full bg-transparent px-3 py-3 focus:outline-none text-white">
                  <option className="bg-[#1e1e1e]">
                    Gym Management System
                  </option>
                  <option className="bg-[#1e1e1e]">
                    Trainer & Staff Management
                  </option>
                  <option className="bg-[#1e1e1e]">
                    Client Subscription System
                  </option>
                  <option className="bg-[#1e1e1e]">Point of Sale</option>
                  <option className="bg-[#1e1e1e]">
                    Inventory & Budget Planning
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                placeholder="Tell us more about your requirements..."
                className="w-full bg-[#1e1e1e] rounded-lg border border-gray-700 focus:border-red-600 transition px-4 py-3 text-white"
                rows="4"
              ></textarea>
            </div>

            {/* Submit */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
              >
                Request Demo
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

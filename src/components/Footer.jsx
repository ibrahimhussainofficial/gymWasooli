import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent pointer-events-none" />

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          className="flex justify-center text-4xl mb-4"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
        >
          🔥💪🏋️
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Take control of your gym’s operations with ease. Start now or book a
          demo to see how we can help.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Links Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Logo + Name */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <img src="./logo.png" alt="" className="w-14" />
            <span className="text-xl font-bold text-white">GymWasooli</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 GymWasooli. All rights reserved.
          </p>
        </motion.div>

        {/* Product */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Class Scheduling
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Data Protection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
}

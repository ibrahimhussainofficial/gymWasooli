import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Gym Wasooli?",
    answer:
      "Gym Wasooli is a complete gym management solution that helps you manage memberships, track payments, schedule classes, and monitor performance—all in one place.",
  },
  {
    question: "Can I track revenue and expenses?",
    answer:
      "Yes! Our revenue tracking tools allow you to easily monitor your gym’s financial performance, track income sources, and manage expenses efficiently.",
  },
  {
    question: "Is there support for trainers and staff?",
    answer:
      "Absolutely. You can manage staff roles, assign tasks, and monitor their performance from your dashboard with ease.",
  },
  {
    question: "Does Gym Wasooli work on mobile devices?",
    answer:
      "Yes. Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktops.",
  },
  {
    question: "How secure is my gym data?",
    answer:
      "We use top-tier encryption and cloud security to ensure your data stays safe, private, and backed up at all times.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-[#1e1e1e] text-white py-30 px-6 md:px-12 overflow-hidden">
      {/* Accent Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-800/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have questions about Gym Wasooli? Here are the answers to the most
          common queries we receive.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto relative z-10">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#121212] border border-gray-800 rounded-2xl mb-4 shadow-md hover:shadow-red-900/10 transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none"
            >
              <span className="text-lg font-semibold text-gray-200">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown
                  className={`text-gray-400 transition-colors ${
                    openIndex === idx ? "text-red-700" : ""
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-6 pb-5 text-gray-400 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(30,30,30,1), rgba(30,30,30,0.5), rgba(30,30,30,0))",
        }}
      ></div>
    </section>
  );
}

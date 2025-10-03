import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    per: "per month",
    description: "Everything to get started with basic features",
    features: [
      "No credit card required",
      "Manage up to 10 members",
      "Access basic gym analytics",
      "Limited trainer scheduling tools",
      "Free support",
      "Track gym revenue",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro Plan",
    price: "$49",
    per: "per month",
    description: "Advanced tools for gym management",
    features: [
      "Manage up to 100 members",
      "Advanced gym analytics",
      "Unlimited trainer scheduling tools",
      "Custom member insights",
      "Priority support",
      "Integrated marketing tools",
    ],
    buttonText: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    price: "***",
    per: "",
    description: "Custom solutions for your business",
    features: [
      "Unlimited members",
      "Personalized dashboard",
      "Custom reporting and analytics",
      "Dedicated account manager",
      "24/7 priority support",
      "API integrations and more",
    ],
    buttonText: "Let's Talk",
    highlighted: false,
  },
];

// Card fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Pricing() {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Easy For Your Bank Account
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our flexible pricing options ensure you have access to the features you
          need, without breaking the bank.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                plan.highlighted
                  ? "border-red-800 bg-[#121212]"
                  : "border-gray-800 bg-[#161616]"
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              whileHover={{ scale: 1.04 }}
            >
              {/* "Most Popular" badge */}
              {plan.highlighted && (
                <span className="absolute top-4 right-4 bg-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.per}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-red-700">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-red-800 text-white hover:bg-red-900"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

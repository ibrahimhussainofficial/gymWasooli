import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaRocket, FaHandshake } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="bg-[#1e1e1e] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-900/40 via-[#1e1e1e] to-[#121212] py-24 px-6 md:px-12 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Logics Labs
        </motion.h1>
        <motion.p
          className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Logics Lab is one of the leading IT and software companies in Karachi,
          Pakistan holding NTN 8232639-6. Our company is committed to delivering
          best-in-class IT products to the entire Pakistan to help our clients
          achieve their business goals. We provide cost-effective and
          state-of-the-art technologies, solutions & services since 2016.
        </motion.p>
      </div>

      {/* Our Services */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Web Design & Development",
            "Android/iOS Mobile Apps Design & Development",
            "Application Design & Development",
            "Desktop Base Software Solutions",
            "Graphic Designing",
            "Support Services",
            "Digital Marketing",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#121212] p-6 rounded-2xl border border-gray-800 shadow-md hover:border-red-700 hover:shadow-red-900/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <FaCheckCircle className="text-red-600 text-2xl mb-3" />
              <h3 className="font-semibold text-lg">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-[#121212] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              Logics Labs strives to provide and protect an environment that
              features “IT Abundance,” where IT infrastructure, services, and
              solutions are innovative, readily available, and utilized to
              support students, faculty, and staff in their endeavors to uphold
              the country mission.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to deliver optimum solutions with quality and
              services at affordable prices. We value our customers and nurture
              a strong, careful relationship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Team
        </motion.h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          We have a rapidly growing team with expertise in various technologies
          and frameworks, creating some of the best products out there. We are
          constantly learning, working day and night to develop the best.
          Helping each other to improve speed and quality is our ethos.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Passionate", "Collaborative", "Innovative", "Client-Focused"].map(
            (value, idx) => (
              <motion.div
                key={idx}
                className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-md hover:border-red-700 hover:shadow-red-900/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <FaUsers className="text-red-600 text-3xl mb-3" />
                <h4 className="text-lg font-semibold">{value}</h4>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Our Work / Ongoing Projects */}
      <div className="bg-[#121212] py-20 px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Work and Ongoing Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Pharmaceutical Marketing Software",
            "Pharmaceutical Marketing Sale",
            "Pharma Activity System",
            "Pharmacovigilance Research System",
            "Monthly Collection System",
            "Clinic Management System",
            "Union Management System",
            "WasooliPK ERP (For Internet & Cable)",
            "Help Desk Management System",
            "Bookshop Management System",
            "Gym Management System",
            "Event Management System",
            "School Management System",
            "Marketing ERP",
          ].map((work, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-800 hover:border-red-700 transition-all"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <FaRocket className="text-red-600 text-xl mb-2" />
              <p className="text-gray-300">{work}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* We Believe */}
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          We Believe
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "In Long-Lasting Relationships",
              text: "IT is the exchange of ideas, the shared thrill of discovery, and deep respect for our clients and community that define our culture.",
              icon: <FaHandshake />,
            },
            {
              title: "We Work Closely With Our People",
              text: "Our teams, clients, and partners build long-term business relationships and provide innovations that fuel the economy and stimulate positive change.",
              icon: <FaUsers />,
            },
            {
              title: "We Can Solve Any Challenge",
              text: "As a business grows, different issues require different solutions. We help our clients develop new perspectives, actions, and reactions to take their business forward.",
              icon: <FaRocket />,
            },
            {
              title: "In Ourselves and Our Team",
              text: "We treat everyone with warmth, empathy, and understanding. This is why we love to interact with the people we work, play, create, and travel with.",
              icon: <FaUsers />,
            },
          ].map((belief, idx) => (
            <motion.div
              key={idx}
              className="bg-[#121212] p-6 rounded-2xl border border-gray-800 hover:border-red-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-red-600 text-3xl mb-4">{belief.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{belief.title}</h3>
              <p className="text-gray-400">{belief.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

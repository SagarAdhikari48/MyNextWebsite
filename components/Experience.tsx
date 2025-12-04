"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    company: "Ojas Technologies",
    role: "Frontend Developer",
    type: "Full-time",
    location: "Kathmandu",
    period: "08/2024 - Present",
    description: [
      "Developed Blazor WebAssembly and Blazor Server applications with ASP.NET Core 9",
      "Built SearchMed medical appointment platform with cross-platform support (Web, Desktop, Android, iOS)",
      "Implemented doctor search, profiles, ratings, and calendar-based scheduling",
      "Developed TradeMind Zen Hub trading app with AI recommendations using Angular and Node.js",
      "Built comprehensive dashboard and Guardian AI page with real-time market analytics",
      "Developed e-commerce platform (Customfiller) using Next.js with Stripe payments",
      "Built APIs and storage solutions using Supabase",
    ],
  },
  {
    company: "LeanLaw",
    role: "Frontend Developer",
    type: "Remote",
    location: "Remote",
    period: "04/2023 - 07/2024",
    description: [
      "Transitioned frontend from AngularJS to Vue.js with Pinia store",
      "Implemented new features and maintained existing functionality",
      "Conducted Cypress end-to-end tests",
      "Integrated Luzmo plugin for reporting and Maxio payment gateway",
      "Focused on billing features for LeanLaw and QuickBooks integration",
    ],
  },
  {
    company: "Swivt Technologies",
    role: "Frontend Developer",
    type: "Remote/Onsite",
    location: "Remote/Onsite",
    period: "06/2022 - 04/2023",
    description: [
      "Developed user access roles and bonus calculations using Angular",
      "Built Warehouse Management System (WMS) for 3PL-TOTAL TECHNOLOGY",
      "Implemented dashboard charts using Stomp Client",
      "Managed order processes and live data visualization",
    ],
  },
  {
    company: "Jhigu Bazar",
    role: "Full Stack Developer",
    type: "Remote",
    location: "Remote",
    period: "01/2020 - 06/2022",
    description: [
      "Developed Ionic Angular and NestJS marketplace application",
      "Implemented image recognition and location services",
      "Built push notifications system",
      "Managed dark/light theme and content filtering",
    ],
  },
  {
    company: "Truenary Software",
    role: "Frontend Developer",
    type: "Remote",
    location: "Remote",
    period: "11/2019 - 01/2020",
    description: [
      "Developed remote work application using Angular and Electron",
      "Built financial co-operative app using Angular and ngRx",
    ],
  },
  {
    company: "Nirekha Dot Com",
    role: "Frontend Developer",
    type: "Onsite",
    location: "Onsite",
    period: "10/2018 - 10/2019",
    description: [
      "Developed desktop app for business registration for NTA",
      "Created web application for internet speed testing",
      "Built complaint handling system for Nepal Telecommunications Authority",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 gradient-primary rounded-lg shadow-md">
                      <FiBriefcase className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {exp.role}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {exp.type} • {exp.period}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="text-purple-500 mr-2 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

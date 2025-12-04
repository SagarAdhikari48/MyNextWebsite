"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "TradeMind Zen Hub",
    description: "Advanced trading application with AI-powered recommendations and analytics. Built comprehensive dashboard and Guardian AI page with real-time market insights.",
    tech: ["Angular", "Node.js", "AI/ML", "TypeScript"],
    gradient: "from-emerald-500 to-teal-500",
    link: "https://preview--trade-mind-zen-hub.lovable.app/guardian-ai",
  },
  {
    title: "SearchMed",
    description: "Medical appointment platform with provider registration, scheduling, vaccination reminders, and cross-platform support (Web, Desktop, Android, iOS).",
    tech: ["Blazor", "ASP.NET Core 9", ".NET MAUI", "C#"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Customfiller E-commerce",
    description: "E-commerce platform specialized in aerosol filling solutions with secure Stripe payment integration and Supabase backend.",
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    gradient: "from-purple-500 to-pink-500",
    link: "https://customfiller.com",
  },
  {
    title: "LeanLaw Billing App",
    description: "Legal billing and practice management software with QuickBooks integration, client reporting, and payment processing.",
    tech: ["Vue.js", "Pinia", "Cypress", "TypeScript"],
    gradient: "from-green-500 to-teal-500",
    link: "https://www.leanlaw.co/",
  },
  {
    title: "Jhigu Bazar",
    description: "Marketplace application with image recognition, location services, push notifications, and theme management.",
    tech: ["Ionic", "Angular", "NestJS", "MongoDB"],
    gradient: "from-orange-500 to-red-500",
    link: "https://www.jhigubazar.com",
  },
  {
    title: "Warehouse Management System",
    description: "WMS for 3PL operations with real-time dashboard charts, order management, and user access control.",
    tech: ["Angular", "Stomp Client", "TypeScript"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "NTA Business Registration",
    description: "Desktop application for business registration and internet speed testing for Nepal Telecommunications Authority.",
    tech: ["Angular", "Electron", "Node.js"],
    gradient: "from-yellow-500 to-orange-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all group border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-4xl font-bold drop-shadow-lg"
                    >
                      {project.title.charAt(0)}
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                      >
                        <FiExternalLink size={18} />
                        <span className="text-sm">View Project</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  ASP.NET MVC Course
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Broadway Infosys</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Java Programming - Advanced
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Advanced College Of Engineering And Management
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
